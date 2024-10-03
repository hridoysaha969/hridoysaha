import dbConnect from "@/lib/connection";
import { Message } from "@/lib/models/Message";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  await dbConnect();

  const result = await Message.deleteOne({ _id: params.id });
  if (result.deletedCount > 0) {
    return NextResponse.json(
      { message: "Message Deleted Successfully", success: true },
      { status: 200 }
    );
  }

  return NextResponse.json(
    { message: "Failed to delete message!", success: false },
    { status: 400 }
  );
}
