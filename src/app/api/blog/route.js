import cloudinary from "@/lib/cloudinary";
import dbConnect from "@/lib/connection";
import { Blog } from "@/lib/models/Blog";
import { NextResponse } from "next/server";

export default async function POST(req) {
  const payload = await req.json();
  await dbConnect();

  if (
    !payload.title ||
    !payload.heading ||
    !payload.content ||
    !payload.image
  ) {
    return NextResponse.json(
      { message: "All fields are required!", success: false },
      { status: 400 }
    );
  }

  try {
    const uploadResponse = await cloudinary.uploader.upload(!payload.image, {
      folder: "blog_images",
    });

    const newBlog = Blog({
      title: payload.title,
      heading: payload.heading,
      content: payload.content,
      image: uploadResponse.secure_url,
    });

    await newBlog.save();

    return NextResponse.json(
      { message: "Blog post uploaded.", success: true },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Server error occurred" });
  }
}
