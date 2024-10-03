import dbConnect from "@/lib/connection";
import { Blog } from "@/lib/models/Blog";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await dbConnect();
  const { id } = params;

  // Check if the provided id is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json(
      { message: "Invalid blog ID", success: false },
      { status: 400 }
    );
  }

  const blogs = await Blog.findById(id); // Fetch your blog data from the database

  if (!blogs) {
    return NextResponse.json(
      { message: "Blog not found", success: false },
      { status: 400 }
    );
  }

  return NextResponse.json({ blogs, success: true }, { status: 200 });
}