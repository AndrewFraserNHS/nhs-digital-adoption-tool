import { jsPDF } from 'jspdf';

export const PDF_MARGIN = 15;
const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;
export const PDF_CONTENT_WIDTH = PAGE_WIDTH - PDF_MARGIN * 2;

export interface PdfTextStyle {
  size?: number;
  bold?: boolean;
  /** Grey level 0 (black) - 255 (white). */
  color?: number;
  /** Space left after the text, in mm. */
  gap?: number;
}

export interface PdfWriter {
  doc: jsPDF;
  /** Current vertical position in mm. */
  y: number;
  ensureSpace: (needed: number) => void;
  write: (text: string, style?: PdfTextStyle) => void;
}

/** A portrait A4 document with a simple top-to-bottom text flow that adds pages as needed. */
export function createPdfWriter(): PdfWriter {
  const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
  const writer: PdfWriter = {
    doc,
    y: PDF_MARGIN,
    ensureSpace: (needed) => {
      if (writer.y + needed > PAGE_HEIGHT - PDF_MARGIN) {
        doc.addPage();
        writer.y = PDF_MARGIN;
      }
    },
    write: (text, { size = 10, bold = false, color = 30, gap = 1.5 } = {}) => {
      doc.setFont('helvetica', bold ? 'bold' : 'normal');
      doc.setFontSize(size);
      doc.setTextColor(color);
      const lineHeight = size * 0.5;
      const lines: string[] = doc.splitTextToSize(text, PDF_CONTENT_WIDTH);
      lines.forEach((line) => {
        writer.ensureSpace(lineHeight);
        doc.text(line, PDF_MARGIN, writer.y + size * 0.3);
        writer.y += lineHeight;
      });
      writer.y += gap;
    },
  };
  return writer;
}
