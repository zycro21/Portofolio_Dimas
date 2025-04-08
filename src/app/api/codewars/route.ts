import { NextResponse } from "next/server";

export async function GET() {
  const username = "zycro21";

  const res = await fetch(`https://www.codewars.com/api/v1/users/${username}`, {
    headers: {
      "User-Agent": "MyPortfolioApp/1.0 (https://yourdomain.com)",
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Codewars fetch failed:", errorText);
    return NextResponse.json(
      { error: "Failed to fetch Codewars data" },
      { status: 500 }
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
