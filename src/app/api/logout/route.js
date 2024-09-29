import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const cookieStore = cookies();
  cookieStore.set("_hs_User_access_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    expires: new Date(0),
    path: "/",
  });

  return NextResponse.json({ message: "Looged out", success: true });
}
