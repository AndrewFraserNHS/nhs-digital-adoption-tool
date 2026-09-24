import { describe, expect, it } from 'vitest';

import { buildEml, buildEmlWithJsonAttachment, extractEmlAttachments } from './eml';

describe('eml', () => {
  it('SHOULD mark the message as an unsent draft so Outlook opens it for sending', () => {
    const eml = buildEml({ to: 'a@b.c', subject: 'Hi', body: 'Body', attachments: [] });

    expect(eml).toContain('X-Unsent: 1');
    expect(eml).toContain('To: a@b.c');
    expect(eml).toContain('Subject: Hi');
  });

  it('SHOULD encode a non-ASCII subject as an RFC 2047 word', () => {
    const eml = buildEml({ to: 'a@b.c', subject: 'Café Trust', body: '', attachments: [] });

    expect(eml).toMatch(/Subject: =\?UTF-8\?B\?[A-Za-z0-9+/=]+\?=/);
  });

  it('SHOULD round-trip several attachments through extractEmlAttachments', () => {
    const eml = buildEml({
      to: 'a@b.c',
      subject: 'S',
      body: 'Body',
      attachments: [
        { filename: 'r.json', contentType: 'application/json', data: '{"trustName":"Café"}' },
        { filename: 'r.pdf', contentType: 'application/pdf', data: new Uint8Array([37, 80, 68, 70]) },
      ],
    });

    const found = extractEmlAttachments(eml);

    expect(found.map((f) => f.filename)).toEqual(['r.json', 'r.pdf']);
    expect(JSON.parse(new TextDecoder().decode(found[0].bytes))).toEqual({ trustName: 'Café' });
    expect(Array.from(found[1].bytes)).toEqual([37, 80, 68, 70]);
  });

  it('SHOULD keep the single JSON attachment helper working', () => {
    const eml = buildEmlWithJsonAttachment({
      to: 'a@b.c',
      subject: 'S',
      body: 'B',
      attachmentFilename: 'x.json',
      attachmentJson: { a: 1 },
    });

    const [attachment] = extractEmlAttachments(eml);

    expect(JSON.parse(new TextDecoder().decode(attachment.bytes))).toEqual({ a: 1 });
  });
});
