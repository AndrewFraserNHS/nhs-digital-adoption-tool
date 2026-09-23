function toBase64Utf8(value: string): string {
  const bytes = new TextEncoder().encode(value);
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

export interface EmlWithJsonAttachmentOptions {
  to: string;
  subject: string;
  body: string;
  attachmentFilename: string;
  attachmentJson: unknown;
}

/**
 * Builds a .eml file (RFC 822 message, multipart/mixed) with a JSON payload embedded as a real
 * base64 attachment. Downloading and opening it launches the user's default mail client with the
 * recipient, subject, body and attachment already in place - the only way to get a genuine
 * attachment out of a browser without a mailto: link, which has no attachment mechanism at all.
 */
export function buildEmlWithJsonAttachment({
  to,
  subject,
  body,
  attachmentFilename,
  attachmentJson,
}: EmlWithJsonAttachmentOptions): string {
  const encodedAttachment = wrapBase64Lines(
    toBase64Utf8(JSON.stringify(attachmentJson, null, 2))
  );
  const boundary = `----nhs-adoption-${Date.now()}`;

  return [
    `To: ${to}`,
    `Subject: ${subject}`,
    'MIME-Version: 1.0',
    `Content-Type: multipart/mixed; boundary="${boundary}"`,
    '',
    `--${boundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    'Content-Transfer-Encoding: 8bit',
    '',
    body,
    '',
    `--${boundary}`,
    `Content-Type: application/json; name="${attachmentFilename}"`,
    'Content-Transfer-Encoding: base64',
    `Content-Disposition: attachment; filename="${attachmentFilename}"`,
    '',
    encodedAttachment,
    `--${boundary}--`,
    '',
  ].join('\r\n');
}
