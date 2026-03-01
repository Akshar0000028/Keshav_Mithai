import { NextResponse } from "next/server";
import db from "@/db";

export async function POST(request: Request) {
  const body = await request.json();
  const { customerName, email, phone, address, city, pincode, items } = body;

  if (!customerName || !email || !phone || !address || !city || !pincode || !items?.length) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  const total = items.reduce(
    (sum: number, item: { price: number; quantity: number }) => sum + item.price * item.quantity,
    0
  );

  const insertOrder = db.prepare(`
    INSERT INTO orders (customerName, email, phone, address, city, pincode, total)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  const insertOrderItem = db.prepare(`
    INSERT INTO order_items (orderId, productId, productName, quantity, price)
    VALUES (?, ?, ?, ?, ?)
  `);

  const createOrder = db.transaction(() => {
    const result = insertOrder.run(customerName, email, phone, address, city, pincode, total);
    const orderId = result.lastInsertRowid;

    for (const item of items) {
      insertOrderItem.run(orderId, item.productId, item.productName, item.quantity, item.price);
    }

    return orderId;
  });

  const orderId = createOrder();

  return NextResponse.json({ orderId, total }, { status: 201 });
}
