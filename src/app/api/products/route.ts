import { NextResponse } from "next/server";
import { products } from "@/lib/productsData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const featured = searchParams.get("featured");

  let filtered = products.filter((p) => p.inStock === 1);

  if (category) {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (featured === "true") {
    filtered = filtered.filter((p) => p.featured === 1);
  }

  filtered = filtered.slice().sort((a, b) => {
    if (b.featured !== a.featured) {
      return b.featured - a.featured;
    }
    return a.name.localeCompare(b.name);
  });

  return NextResponse.json(filtered);
}
