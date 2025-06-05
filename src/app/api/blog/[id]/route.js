import dbConnect from "@/lib/connection";
import { Blog } from "@/lib/models/Blog";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await dbConnect();
  const { id } = params;

  // TEMPORARY: Set missing views field to 0
  await Blog.updateMany({ views: { $exists: false } }, { $set: { views: 0 } });

  // const blogs = await Blog.findById(id); // Fetch your blog data from the database
  const blogs = await Blog.findOne({ slug: id }).lean();

  if (!blogs) {
    return NextResponse.json(
      { message: "Blog not found", success: false },
      { status: 400 }
    );
  }

  return NextResponse.json({ blogs, success: true }, { status: 200 });
}
