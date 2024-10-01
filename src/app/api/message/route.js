import dbConnect from "@/lib/connection";
import { Message } from "@/lib/models/Message";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function GET(req) {
  const cookieStore = cookies();
  const tokenCookie = cookieStore.get("_hs_User_access_token"); //Get The Cookie Object

  const token = tokenCookie?.value || "";

  if (!token) {
    return NextResponse.json(
      { message: "Unauthorized!", success: false },
      { status: 400 }
    );
  }

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );
    if (payload.role !== "admin") {
      return NextResponse.json(
        { message: "Access denied, admins only", success: false },
        { status: 400 }
      );
    }
  } catch (err) {
    return NextResponse.json(
      { message: "Server error", success: false },
      { status: 500 }
    );
  }

  await dbConnect();
  let result = [];
  const data = await Message.find();
  if (data) {
    result = data;
  }

  return NextResponse.json({ result, success: true }, { status: 200 });
}

export async function POST(req) {
  const payload = await req.json();
  await dbConnect();

  if (!payload.fullName || !payload.email || !payload.message) {
    return NextResponse.json(
      { message: "Required name, email and message", success: false },
      { status: 400 }
    );
  }

  try {
    const message = new Message({
      fullName: payload.fullName,
      email: payload.email,
      message: payload.message,
    });

    await message.save();

    return NextResponse.json(
      { message: "Message sent successfully!", success: true },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: err.message, success: false },
      { status: 500 }
    );
  }
}
