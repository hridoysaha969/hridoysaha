// app/api/blog/route.js
import cloudinary from "@/lib/cloudinary";
import dbConnect from "@/lib/connection";
import { Blog } from "@/lib/models/Blog";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import slugify from "slugify";

export async function GET(req) {
  const cookieStore = cookies();
  const tokenCookie = cookieStore.get("_hs_User_access_token"); //Get The Cookie Object
  const token = tokenCookie?.value || "";

  const { searchParams } = new URL(req.url);
  console.log(searchParams.get("page"), "From Rout API");

  const page = parseInt(searchParams.get("page")) || 1;
  const limit = 6;

  const skip = (page - 1) * limit;

  await dbConnect();
  const blogs = await Blog.find({})
    .sort({ publishDate: -1 })
    .skip(skip)
    .limit(limit); // Fetch your blog data from the database

  const totalBlogs = await Blog.countDocuments();

  return NextResponse.json(
    {
      blogs,
      success: true,
      pagination: {
        total: totalBlogs,
        page,
        limit,
        totalPages: Math.ceil(totalBlogs / limit),
      },
    },
    { status: 200 }
  );
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
    if (payload.role !== process.env.ADMIN_AUTH_VALUE) {
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

  const slug = slugify(title, { lower: true });

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
      slug,
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
