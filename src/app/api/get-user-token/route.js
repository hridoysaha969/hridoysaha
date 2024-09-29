// app/api/get-user-token/route.js (or any other API route)
import { NextResponse } from "next/server";

export async function GET(req) {
  const token = req.cookies.get("_hs_User_access_token")?.value;

  if (!token) {
    return NextResponse.json({ error: "No token found" }, { status: 401 });
  }

  return NextResponse.json({ token });
}
