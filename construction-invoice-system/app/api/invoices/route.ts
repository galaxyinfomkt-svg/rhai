import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// Generate invoice number
function generateInvoiceNumber(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  return `INV-${timestamp}`;
}

// GET - List all invoices
export async function GET(request: NextRequest) {
  try {
    // In a real app, you'd get the userId from the session
    const userId = request.headers.get("x-user-id") || "demo-user";
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get("status");
    const serviceType = searchParams.get("serviceType");

    const where: Record<string, unknown> = { userId };
    if (status && status !== "all") where.status = status;
    if (serviceType && serviceType !== "all") where.serviceType = serviceType;

    const invoices = await prisma.invoice.findMany({
      where,
      orderBy: { createdAt: "desc" },
      include: {
        customer: {
          select: { id: true, name: true, email: true },
        },
        items: true,
        payments: true,
      },
    });

    return NextResponse.json(invoices);
  } catch (error) {
    console.error("Error fetching invoices:", error);
    return NextResponse.json(
      { error: "Failed to fetch invoices" },
      { status: 500 }
    );
  }
}

// POST - Create a new invoice
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      customerId,
      serviceType,
      projectName,
      projectAddress,
      dueDate,
      notes,
      terms,
      taxRate,
      discount,
      items,
      subtotal,
      taxAmount,
      total,
    } = body;

    // In a real app, you'd get the userId from the session
    const userId = request.headers.get("x-user-id") || "demo-user";

    if (!customerId) {
      return NextResponse.json(
        { error: "Customer is required" },
        { status: 400 }
      );
    }

    if (!dueDate) {
      return NextResponse.json(
        { error: "Due date is required" },
        { status: 400 }
      );
    }

    const invoice = await prisma.invoice.create({
      data: {
        number: generateInvoiceNumber(),
        userId,
        customerId,
        serviceType: serviceType || "PAINTING",
        projectName,
        projectAddress,
        dueDate: new Date(dueDate),
        status: "draft",
        notes,
        terms,
        taxRate: taxRate || 0,
        taxAmount: taxAmount || 0,
        discount: discount || 0,
        subtotal: subtotal || 0,
        total: total || 0,
        items: {
          create: items?.map((item: { description: string; quantity: number; unit: string; unitPrice: number; total: number }) => ({
            description: item.description,
            quantity: item.quantity,
            unit: item.unit,
            unitPrice: item.unitPrice,
            total: item.total,
          })) || [],
        },
      },
      include: {
        customer: true,
        items: true,
      },
    });

    return NextResponse.json(invoice, { status: 201 });
  } catch (error) {
    console.error("Error creating invoice:", error);
    return NextResponse.json(
      { error: "Failed to create invoice" },
      { status: 500 }
    );
  }
}
