import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Vite plugin: IP friction for the authored content JSON (action libraries, component
 * descriptors, CAB questions). Each file is XOR-masked + base64-encoded at build time and decoded
 * in the browser on first import, so the wording is not greppable in the shipped bundle or
 * readable from the Network tab as plain text.
 *
 * This is deterrence only: the key and decoder ship in the bundle, so a determined person can
 * still recover the content. It works for both `import x from 'file.json'` and `?raw` imports,
 * and in dev/vitest as well as build, so behaviour is identical everywhere.
 */
const PREFIX = String.fromCharCode(0) + 'obf:';
const KEY = 'nda-6f1c';
const TARGET_DIRS = ['/src/data/component-actions/', '/src/data/component-descriptors/'];
const TARGET_FILES = [
  '/src/data/preparedness-assessment.json',
  '/src/data/component-guidance.json',
  '/src/data/maturity-guidance-links.json',
  '/src/data/pathwayAnalysis.txt',
];
const isTarget = (file) => {
  const path = file.replace(/\\/g, '/');
  return (
    (path.endsWith('.json') && TARGET_DIRS.some((dir) => path.includes(dir))) ||
    TARGET_FILES.some((target) => path.endsWith(target))
  );
};

const DECODER =
  'const d=(s,k)=>{const b=atob(s),u=new Uint8Array(b.length);' +
  'for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i)^k.charCodeAt(i%k.length);' +
  'return new TextDecoder().decode(u)};';

/** XOR-mask + base64 a UTF-8 string (same scheme the in-bundle decoder and src/lib/dataDecode.ts reverse). */
export function encodeData(text) {
  const bytes = Buffer.from(text, 'utf8');
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] ^= KEY.charCodeAt(i % KEY.length);
  }
  return bytes.toString('base64');
}

export function obfuscateDataPlugin() {
  let outDir = 'dist';
  return {
    name: 'obfuscate-data',
    enforce: 'pre',
    configResolved(config) {
      outDir = join(config.root, config.build.outDir);
    },
    // Source files in public/test-data stay plain, editable JSON; the built copies are encoded.
    // The app's example-data loader accepts both (src/lib/dataDecode.ts).
    closeBundle() {
      const dir = join(outDir, 'test-data');
      let names = [];
      try {
        names = readdirSync(dir).filter((name) => name.endsWith('.json'));
      } catch {
        return;
      }
      for (const name of names) {
        const file = join(dir, name);
        const text = readFileSync(file, 'utf8');
        if (['[', '{'].includes(text.trimStart()[0])) {
          writeFileSync(file, encodeData(text));
        }
      }
    },
    // Re-point matching imports at a virtual id that does not end in .json, so Vite's built-in
    // JSON transform never sees them. Id shape: \0obf:<raw|json>:<absolute file path>.js
    async resolveId(source, importer, options) {
      if (!/\.(json|txt)(\?|$)/.test(source)) {
        return null;
      }
      const resolved = await this.resolve(source, importer, { ...options, skipSelf: true });
      if (!resolved || resolved.id.startsWith(PREFIX)) {
        return null;
      }
      const [file, query = ''] = resolved.id.split('?');
      if (!isTarget(file)) {
        return null;
      }
      const isRaw = /(^|&)raw(&|=|$)/.test(query);
      // .txt is only ever imported as raw text; plain imports of other files pass through untouched.
      if ((query && !isRaw) || (file.endsWith('.txt') && !isRaw)) {
        return null;
      }
      return `${PREFIX}${isRaw ? 'raw' : 'json'}:${file}.js`;
    },
    load(virtualId) {
      if (!virtualId.startsWith(PREFIX)) {
        return null;
      }
      const rest = virtualId.slice(PREFIX.length, -'.js'.length);
      const sep = rest.indexOf(':');
      const isRaw = rest.slice(0, sep) === 'raw';
      const file = rest.slice(sep + 1);
      this.addWatchFile(file);
      const payload = JSON.stringify(encodeData(readFileSync(file, 'utf8')));
      const value = isRaw ? 't' : 'JSON.parse(t)';
      return `${DECODER}const t=d(${payload},${JSON.stringify(KEY)});export default ${value};`;
    },
  };
}
