import { NextResponse } from "next/server";
import db from "@/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const featured = searchParams.get("featured");

  let query = "SELECT * FROM products WHERE inStock = 1";
  const params: (string | number)[] = [];

  if (category) {
    query += " AND category = ?";
    params.push(category);
  }
  if (featured === "true") {
    query += " AND featured = 1";
  }

  query += " ORDER BY featured DESC, name ASC";

  const products = db.prepare(query).all(...params);
  return NextResponse.json(products);
}
