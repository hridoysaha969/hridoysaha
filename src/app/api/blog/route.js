// app/api/blog/route.js
import cloudinary from "@/lib/cloudinary";
import dbConnect from "@/lib/connection";
import { Blog } from "@/lib/models/Blog";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function GET(req) {
  const cookieStore = cookies();
  const tokenCookie = cookieStore.get("_hs_User_access_token"); //Get The Cookie Object

  const token = tokenCookie?.value || "";

  // if (!token) {
  //   return NextResponse.json(
  //     { message: "Unauthorized!", success: false },
  //     { status: 400 }
  //   );
  // }

  // try {
  //   const { payload } = await jwtVerify(
  //     token,
  //     new TextEncoder().encode(process.env.JWT_SECRET)
  //   );
  //   if (payload.role !== "admin") {
  //     return NextResponse.json(
  //       { message: "Access denied, admins only", success: false },
  //       { status: 400 }
  //     );
  //   }
  // } catch (err) {
  //   return NextResponse.json(
  //     { message: "Server error", success: false },
  //     { status: 500 }
  //   );
  // }

  await dbConnect();
  const blogs = await Blog.find({}); // Fetch your blog data from the database

  return NextResponse.json({ blogs, success: true }, { status: 200 });
}

export async function POST(req) {
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

  // Convert the NextRequest to a readable stream
  const formData = await req.formData();
  await dbConnect();

  // Extract fields
  const title = formData.get("title");
  const content = formData.get("content");
  const category = formData.get("category");
  const imageData = formData.get("image");

  if (!title || !content || !category || !imageData) {
    return NextResponse.json(
      { message: "All fields are required!", success: false },
      { status: 400 }
    );
  }

  try {
    // Upload the base64 image to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(imageData, {
      folder: "blog_images",
      resource_type: "auto", // Automatically determine the resource type
    });

    // Save the blog post to MongoDB
    const newBlog = new Blog({
      title,
      content,
      category,
      image: uploadResponse.secure_url,
      publishDate: Date.now(),
    });

    await newBlog.save();

    return NextResponse.json(
      { message: "Blog post uploaded successfully.", success: true },
      { status: 201 }
    );
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { message: "Server error occurred", success: false },
      { status: 500 }
    );
  }
}
