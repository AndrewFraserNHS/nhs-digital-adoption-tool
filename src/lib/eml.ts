function bytesToBase64(bytes: Uint8Array): string {
  let binary = '';
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return window.btoa(binary);
}

function wrapBase64Lines(value: string, lineLength = 76): string {
  const chunks: string[] = [];
  for (let index = 0; index < value.length; index += lineLength) {
    chunks.push(value.slice(index, index + lineLength));
  }
  return chunks.join('\r\n');
}

/** RFC 2047 encoded-word so non-ASCII trust names survive in the Subject header. */
function encodeHeader(value: string): string {
  // eslint-disable-next-line no-control-regex
  return /^[\x00-\x7F]*$/.test(value)
    ? value
    : `=?UTF-8?B?${bytesToBase64(new TextEncoder().encode(value))}?=`;
}

export interface EmlAttachment {
  filename: string;
  contentType: string;
  /** Text is UTF-8 encoded; bytes are attached as-is. */
  data: string | Uint8Array;
}

export interface EmlOptions {
  to: string;
  subject: string;
  body: string;
  attachments: EmlAttachment[];
}

/**
 * Builds an RFC 822 draft. `X-Unsent: 1` makes Outlook open it as an editable draft (ready to send)
 * rather than as a received message.
 */
export function buildEml({ to, subject, body, attachments }: EmlOptions): string {
  const boundary = `----nhs-adoption-${Date.now()}`;
  const parts = attachments.flatMap((attachment) => {
    const bytes =
      typeof attachment.data === 'string' ? new TextEncoder().encode(attachment.data) : attachment.data;
    return [
      `--${boundary}`,
      `Content-Type: ${attachment.contentType}; name="${attachment.filename}"`,
      'Content-Transfer-Encoding: base64',
      `Content-Disposition: attachment; filename="${attachment.filename}"`,
      '',
      wrapBase64Lines(bytesToBase64(bytes)),
    ];
  });

  return [
    'X-Unsent: 1',
    `To: ${to}`,
    `Subject: ${encodeHeader(subject)}`,
    `Date: ${new Date().toUTCString()}`,
    'MIME-Version: 1.0',
    `Content-Type: multipart/mixed; boundary="${boundary}"`,
    '',
    `--${boundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    'Content-Transfer-Encoding: base64',
    '',
    wrapBase64Lines(bytesToBase64(new TextEncoder().encode(body.replace(/\r?\n/g, '\r\n')))),
    ...parts,
    `--${boundary}--`,
    '',
  ].join('\r\n');
}

/**
 * Extracts every base64 attachment from an .eml built by `buildEml` (or saved from a mail client),
 * so an emailed report can be imported straight from the message file.
 */
export function extractEmlAttachments(eml: string): Array<{ filename: string; bytes: Uint8Array }> {
  const normalised = eml.replace(/\r?\n/g, '\n');
  const results: Array<{ filename: string; bytes: Uint8Array }> = [];
  const pattern =
    /Content-Disposition:\s*attachment;[^\n]*filename="?([^"\n;]+)"?[^\n]*\n(?:[A-Za-z-]+:[^\n]*\n)*\n([\s\S]*?)(?=\n--)/gi;
  const partPattern = /Content-Transfer-Encoding:\s*base64/i;
  let match = pattern.exec(normalised);
  while (match) {
    const start = Math.max(0, match.index - 400);
    const header = normalised.slice(start, match.index + match[0].length);
    if (partPattern.test(header)) {
      try {
        const binary = window.atob(match[2].replace(/\s+/g, ''));
        results.push({
          filename: match[1],
          bytes: Uint8Array.from(binary, (char) => char.charCodeAt(0)),
        });
      } catch {
        // skip a part that isn't valid base64
      }
    }
    match = pattern.exec(normalised);
  }
  return results;
}

export interface EmlWithJsonAttachmentOptions {
  to: string;
  subject: string;
  body: string;
  attachmentFilename: string;
  attachmentJson: unknown;
}

export function buildEmlWithJsonAttachment({
  to,
  subject,
  body,
  attachmentFilename,
  attachmentJson,
}: EmlWithJsonAttachmentOptions): string {
  return buildEml({
    to,
    subject,
    body,
    attachments: [
      {
        filename: attachmentFilename,
        contentType: 'application/json',
        data: JSON.stringify(attachmentJson, null, 2),
      },
    ],
  });
}
