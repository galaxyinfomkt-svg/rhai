import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// GET - List all customers
export async function GET(request: NextRequest) {
  try {
    // In a real app, you'd get the userId from the session
    const userId = request.headers.get("x-user-id") || "demo-user";

    const customers = await prisma.customer.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      include: {
        invoices: {
          select: { id: true, total: true, status: true },
        },
        estimates: {
          select: { id: true, total: true, status: true },
        },
      },
    });

    return NextResponse.json(customers);
  } catch (error) {
    console.error("Error fetching customers:", error);
    return NextResponse.json(
      { error: "Failed to fetch customers" },
      { status: 500 }
    );
  }
}

// POST - Create a new customer
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, address, city, state, zipCode, notes } = body;

    // In a real app, you'd get the userId from the session
    const userId = request.headers.get("x-user-id") || "demo-user";

    if (!name) {
      return NextResponse.json(
        { error: "Customer name is required" },
        { status: 400 }
      );
    }

    const customer = await prisma.customer.create({
      data: {
        userId,
        name,
        email,
        phone,
        address,
        city,
        state,
        zipCode,
        notes,
      },
    });

    return NextResponse.json(customer, { status: 201 });
  } catch (error) {
    console.error("Error creating customer:", error);
    return NextResponse.json(
      { error: "Failed to create customer" },
      { status: 500 }
    );
  }
}
