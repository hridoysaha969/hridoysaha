import dbConnect from "@/lib/connection";
import { Blog } from "@/lib/models/Blog";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await dbConnect();
  const blogs = await Blog.findOne({ _id: params.id }); // Fetch your blog data from the database

  return NextResponse.json({ blogs, success: true }, { status: 200 });
}
