import dbConnect from "@/lib/connection";
import { Message } from "@/lib/models/Message";
import { NextResponse } from "next/server";

export async function GET(req) {
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
