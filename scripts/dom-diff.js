#!/usr/bin/env node
import { readFileSync } from 'fs';
import { parse } from 'node-html-parser';

function usage() {
  console.error('Usage: node scripts/dom-diff.js <original.html> <refactored.html>');
  process.exit(2);
}

if (process.argv.length < 4) usage();
const aPath = process.argv[2];
const bPath = process.argv[3];

function buildPath(node) {
  const parts = [];
  let cur = node;
  while (cur && cur.tagName) {
    let idx = '';
    if (cur.parentNode) {
      const siblings = cur.parentNode.querySelectorAll(cur.tagName);
      if (siblings.length > 1) {
        idx = '[' + (siblings.indexOf(cur) + 1) + ']';
      }
    }
    const id = cur.getAttribute && cur.getAttribute('id');
    parts.unshift(`${cur.tagName.toLowerCase()}${id ? `#${id}` : ''}${idx}`);
    cur = cur.parentNode;
  }
  return parts.join('>');
}

function extractTree(root) {
  const out = [];
  function walk(node) {
    if (!node.tagName) return;
    const attrs = {};
    for (const [k, v] of Object.entries(node.attributes || {})) {
      attrs[k] = String(v);
    }
      const inner = (node.innerHTML || '').trim();
      out.push({ path: buildPath(node), tag: node.tagName.toLowerCase(), id: node.getAttribute('id') || null, class: node.getAttribute('class') || null, attrs, inner });
    (node.childNodes || []).forEach(walk);
  }
  walk(root);
  return out;
}

const aHtml = readFileSync(aPath, 'utf8');
const bHtml = readFileSync(bPath, 'utf8');
const aRoot = parse(aHtml, { script: true, style: true });
const bRoot = parse(bHtml, { script: true, style: true });

const aList = extractTree(aRoot);
const bList = extractTree(bRoot);

const bByPath = new Map(bList.map(x => [x.path, x]));

const missing = [];
const diffs = [];

for (const n of aList) {
  const m = bByPath.get(n.path);
  if (!m) {
    missing.push(n.path);
    continue;
  }
  // compare tag
  if (n.tag !== m.tag) diffs.push({ path: n.path, type: 'tag', a: n.tag, b: m.tag });
  // compare id
  if ((n.id || '') !== (m.id || '')) diffs.push({ path: n.path, type: 'id', a: n.id, b: m.id });
  // compare class list (normalized)
  const as = (n.class || '').split(/\s+/).filter(Boolean).sort().join(' ');
  const bs = (m.class || '').split(/\s+/).filter(Boolean).sort().join(' ');
  if (as !== bs) diffs.push({ path: n.path, type: 'class', a: as, b: bs });
  // compare all attributes
  const attrKeys = Array.from(new Set([...Object.keys(n.attrs || {}), ...Object.keys(m.attrs || {})]));
  for (const k of attrKeys) {
    const av = (n.attrs && n.attrs[k]) || '';
    const bv = (m.attrs && m.attrs[k]) || '';
    if (av !== bv) diffs.push({ path: n.path, type: `attr:${k}`, a: av, b: bv });
  }
  // compare innerHTML for content differences (trimmed)
  const ai = (n.inner || '').replace(/\s+/g, ' ').trim();
  const bi = (m.inner || '').replace(/\s+/g, ' ').trim();
  if (ai !== bi) {
    diffs.push({ path: n.path, type: 'innerHTML', a: ai.slice(0, 200), b: bi.slice(0, 200) });
  }
}

console.log('DOM diff report');
console.log('Original:', aPath);
console.log('Refactored:', bPath);
console.log('');
if (missing.length) {
  console.log('Elements present in original but MISSING in refactored:');
  missing.slice(0, 200).forEach(p => console.log(' -', p));
  console.log('');
} else {
  console.log('No missing elements detected.');
}

if (diffs.length) {
  console.log('Attribute/tag/class differences:');
  diffs.slice(0, 500).forEach(d => console.log(` - ${d.path} :: ${d.type} => original="${d.a}" refactored="${d.b}"`));
} else {
  console.log('No attribute/class/tag differences detected.');
}

process.exit(0);
