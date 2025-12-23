import jsPDF from "jspdf";

interface InvoiceItem {
  description: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  total: number;
}

interface InvoiceData {
  number: string;
  issueDate: string;
  dueDate: string;
  status: string;
  serviceType: string;
  projectName?: string;
  projectAddress?: string;
  customer: {
    name: string;
    email?: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    zipCode?: string;
  };
  items: InvoiceItem[];
  subtotal: number;
  taxRate: number;
  taxAmount: number;
  discount: number;
  total: number;
  notes?: string;
  terms?: string;
  companyInfo: {
    name: string;
    address?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    phone?: string;
    email?: string;
  };
}

interface EstimateData extends Omit<InvoiceData, "dueDate"> {
  validUntil: string;
}

export function generateInvoicePDF(data: InvoiceData): jsPDF {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();

  // Colors
  const primaryColor = [245, 158, 11]; // Amber
  const textColor = [30, 41, 59]; // Slate-800
  const lightGray = [148, 163, 184]; // Slate-400

  // Header
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(0, 0, pageWidth, 40, "F");

  // Company Name
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("Calazans Lumina", 20, 25);

  // Invoice Label
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("INVOICE", pageWidth - 20, 20, { align: "right" });
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text(data.number, pageWidth - 20, 30, { align: "right" });

  // Reset text color
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);

  // Company Info
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  let yPos = 55;
  doc.text(data.companyInfo.name, 20, yPos);
  if (data.companyInfo.address) {
    yPos += 5;
    doc.text(data.companyInfo.address, 20, yPos);
  }
  if (data.companyInfo.city || data.companyInfo.state || data.companyInfo.zipCode) {
    yPos += 5;
    doc.text(`${data.companyInfo.city}, ${data.companyInfo.state} ${data.companyInfo.zipCode}`, 20, yPos);
  }
  if (data.companyInfo.phone) {
    yPos += 5;
    doc.text(data.companyInfo.phone, 20, yPos);
  }

  // Bill To
  doc.setFont("helvetica", "bold");
  doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
  doc.text("BILL TO", 20, 90);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  doc.setFont("helvetica", "normal");
  doc.text(data.customer.name, 20, 97);
  if (data.customer.address) {
    doc.text(data.customer.address, 20, 102);
  }
  if (data.customer.city || data.customer.state || data.customer.zipCode) {
    doc.text(`${data.customer.city || ""}, ${data.customer.state || ""} ${data.customer.zipCode || ""}`.trim(), 20, 107);
  }
  if (data.customer.email) {
    doc.text(data.customer.email, 20, 112);
  }
  if (data.customer.phone) {
    doc.text(data.customer.phone, 20, 117);
  }

  // Invoice Details
  const rightCol = pageWidth - 60;
  doc.setFont("helvetica", "bold");
  doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
  doc.text("INVOICE DATE", rightCol, 90);
  doc.text("DUE DATE", rightCol, 100);
  doc.text("SERVICE TYPE", rightCol, 110);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  doc.text(new Date(data.issueDate).toLocaleDateString(), rightCol + 35, 90, { align: "right" });
  doc.text(new Date(data.dueDate).toLocaleDateString(), rightCol + 35, 100, { align: "right" });
  doc.text(data.serviceType.replace("_", " "), rightCol + 35, 110, { align: "right" });

  // Project Info
  if (data.projectName) {
    doc.setFont("helvetica", "bold");
    doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.text("PROJECT", rightCol, 120);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.text(data.projectName, rightCol + 35, 120, { align: "right" });
  }

  // Items Table Header
  yPos = 135;
  doc.setFillColor(248, 250, 252);
  doc.rect(20, yPos - 5, pageWidth - 40, 10, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("DESCRIPTION", 22, yPos);
  doc.text("QTY", 110, yPos);
  doc.text("UNIT", 125, yPos);
  doc.text("RATE", 145, yPos);
  doc.text("AMOUNT", pageWidth - 22, yPos, { align: "right" });

  // Items
  doc.setFont("helvetica", "normal");
  yPos += 10;
  data.items.forEach((item) => {
    doc.text(item.description.substring(0, 40), 22, yPos);
    doc.text(item.quantity.toString(), 110, yPos);
    doc.text(item.unit, 125, yPos);
    doc.text(`$${item.unitPrice.toFixed(2)}`, 145, yPos);
    doc.text(`$${item.total.toFixed(2)}`, pageWidth - 22, yPos, { align: "right" });
    yPos += 7;
  });

  // Totals
  yPos += 10;
  doc.setDrawColor(226, 232, 240);
  doc.line(110, yPos - 5, pageWidth - 20, yPos - 5);

  doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
  doc.text("Subtotal", 120, yPos);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  doc.text(`$${data.subtotal.toFixed(2)}`, pageWidth - 22, yPos, { align: "right" });

  yPos += 7;
  doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
  doc.text(`Tax (${data.taxRate}%)`, 120, yPos);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  doc.text(`$${data.taxAmount.toFixed(2)}`, pageWidth - 22, yPos, { align: "right" });

  if (data.discount > 0) {
    yPos += 7;
    doc.setTextColor(34, 197, 94); // Green
    doc.text("Discount", 120, yPos);
    doc.text(`-$${data.discount.toFixed(2)}`, pageWidth - 22, yPos, { align: "right" });
  }

  yPos += 10;
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(110, yPos - 6, pageWidth - 130, 12, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("TOTAL DUE", 120, yPos);
  doc.text(`$${data.total.toFixed(2)}`, pageWidth - 22, yPos, { align: "right" });

  // Notes
  if (data.notes) {
    yPos += 25;
    doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text("NOTES", 20, yPos);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.setFont("helvetica", "normal");
    yPos += 5;
    doc.text(data.notes, 20, yPos);
  }

  // Terms
  if (data.terms) {
    yPos += 15;
    doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.setFont("helvetica", "bold");
    doc.text("TERMS & CONDITIONS", 20, yPos);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.setFont("helvetica", "normal");
    yPos += 5;
    doc.text(data.terms, 20, yPos);
  }

  // Footer
  doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
  doc.setFontSize(8);
  doc.text("Thank you for your business!", pageWidth / 2, 280, { align: "center" });
  doc.text("Generated by Calazans Lumina", pageWidth / 2, 285, { align: "center" });

  return doc;
}

export function generateEstimatePDF(data: EstimateData): jsPDF {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();

  // Colors
  const primaryColor = [34, 197, 94]; // Green for estimates
  const textColor = [30, 41, 59];
  const lightGray = [148, 163, 184];

  // Header
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(0, 0, pageWidth, 40, "F");

  // Company Name
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("Calazans Lumina", 20, 25);

  // Estimate Label
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("ESTIMATE", pageWidth - 20, 20, { align: "right" });
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text(data.number, pageWidth - 20, 30, { align: "right" });

  // Reset text color
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);

  // Company Info
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  let yPos = 55;
  doc.text(data.companyInfo.name, 20, yPos);
  if (data.companyInfo.address) {
    yPos += 5;
    doc.text(data.companyInfo.address, 20, yPos);
  }
  if (data.companyInfo.city || data.companyInfo.state || data.companyInfo.zipCode) {
    yPos += 5;
    doc.text(`${data.companyInfo.city}, ${data.companyInfo.state} ${data.companyInfo.zipCode}`, 20, yPos);
  }

  // Customer Info
  doc.setFont("helvetica", "bold");
  doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
  doc.text("PREPARED FOR", 20, 90);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  doc.setFont("helvetica", "normal");
  doc.text(data.customer.name, 20, 97);
  if (data.customer.address) {
    doc.text(data.customer.address, 20, 102);
  }
  if (data.customer.email) {
    doc.text(data.customer.email, 20, 107);
  }

  // Estimate Details
  const rightCol = pageWidth - 60;
  doc.setFont("helvetica", "bold");
  doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
  doc.text("ESTIMATE DATE", rightCol, 90);
  doc.text("VALID UNTIL", rightCol, 100);
  doc.text("SERVICE TYPE", rightCol, 110);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  doc.text(new Date(data.issueDate).toLocaleDateString(), rightCol + 35, 90, { align: "right" });
  doc.text(new Date(data.validUntil).toLocaleDateString(), rightCol + 35, 100, { align: "right" });
  doc.text(data.serviceType.replace("_", " "), rightCol + 35, 110, { align: "right" });

  // Items Table
  yPos = 135;
  doc.setFillColor(248, 250, 252);
  doc.rect(20, yPos - 5, pageWidth - 40, 10, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("DESCRIPTION", 22, yPos);
  doc.text("QTY", 110, yPos);
  doc.text("UNIT", 125, yPos);
  doc.text("RATE", 145, yPos);
  doc.text("AMOUNT", pageWidth - 22, yPos, { align: "right" });

  doc.setFont("helvetica", "normal");
  yPos += 10;
  data.items.forEach((item) => {
    doc.text(item.description.substring(0, 40), 22, yPos);
    doc.text(item.quantity.toString(), 110, yPos);
    doc.text(item.unit, 125, yPos);
    doc.text(`$${item.unitPrice.toFixed(2)}`, 145, yPos);
    doc.text(`$${item.total.toFixed(2)}`, pageWidth - 22, yPos, { align: "right" });
    yPos += 7;
  });

  // Totals
  yPos += 10;
  doc.setDrawColor(226, 232, 240);
  doc.line(110, yPos - 5, pageWidth - 20, yPos - 5);

  doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
  doc.text("Subtotal", 120, yPos);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  doc.text(`$${data.subtotal.toFixed(2)}`, pageWidth - 22, yPos, { align: "right" });

  yPos += 7;
  doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
  doc.text(`Tax (${data.taxRate}%)`, 120, yPos);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  doc.text(`$${data.taxAmount.toFixed(2)}`, pageWidth - 22, yPos, { align: "right" });

  if (data.discount > 0) {
    yPos += 7;
    doc.setTextColor(34, 197, 94);
    doc.text("Discount", 120, yPos);
    doc.text(`-$${data.discount.toFixed(2)}`, pageWidth - 22, yPos, { align: "right" });
  }

  yPos += 10;
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(110, yPos - 6, pageWidth - 130, 12, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("ESTIMATED TOTAL", 115, yPos);
  doc.text(`$${data.total.toFixed(2)}`, pageWidth - 22, yPos, { align: "right" });

  // Notes & Terms
  if (data.notes) {
    yPos += 25;
    doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text("NOTES", 20, yPos);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.setFont("helvetica", "normal");
    yPos += 5;
    doc.text(data.notes, 20, yPos);
  }

  if (data.terms) {
    yPos += 15;
    doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.setFont("helvetica", "bold");
    doc.text("TERMS & CONDITIONS", 20, yPos);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.setFont("helvetica", "normal");
    yPos += 5;
    doc.text(data.terms, 20, yPos);
  }

  // Footer
  doc.setTextColor(lightGray[0], lightGray[1], lightGray[2]);
  doc.setFontSize(8);
  doc.text("This is an estimate only. Final costs may vary.", pageWidth / 2, 280, { align: "center" });
  doc.text("Generated by Calazans Lumina", pageWidth / 2, 285, { align: "center" });

  return doc;
}
