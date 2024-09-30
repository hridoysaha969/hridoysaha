// import cloudinary from "@/lib/cloudinary";
// import dbConnect from "@/lib/connection";
// import { Blog } from "@/lib/models/Blog";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   const payload = await req.json();
//   await dbConnect();

//   if (
//     !payload.title ||
//     !payload.heading ||
//     !payload.content ||
//     !payload.sub_content ||
//     !payload.image
//   ) {
//     return NextResponse.json(
//       { message: "All fields are required!", success: false },
//       { status: 400 }
//     );
//   }

//   try {
//     const uploadResponse = await cloudinary.uploader.upload(!payload.image, {
//       folder: "blog_images",
//     });

//     const newBlog = Blog({
//       title: payload.title,
//       heading: payload.heading,
//       content: payload.content,
//       image: uploadResponse.secure_url,
//     });

//     await newBlog.save();

//     return NextResponse.json(
//       { message: "Blog post uploaded.", success: true },
//       { status: 201 }
//     );
//   } catch (err) {
//     return NextResponse.json(
//       { message: "Server error occurred", success: false },
//       { status: 500 }
//     );
//   }
// }

// app/api/blog/route.js\\

// app/api/blog/route.js
import cloudinary from "@/lib/cloudinary";
import dbConnect from "@/lib/connection";
import { Blog } from "@/lib/models/Blog";
import { NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: false, // Disable Next.js body parsing
  },
};

export async function POST(req) {
  // Convert the NextRequest to a readable stream
  const formData = await req.formData();
  await dbConnect();

  // Extract fields
  const title = formData.get("title");
  const heading = formData.get("heading");
  const content = formData.get("content");
  const sub_content = formData.get("sub_content");
  const imageData = formData.get("image");

  if (!title || !heading || !content || !sub_content || !imageData) {
    return NextResponse.json(
      { message: "All fields are required!", success: false },
      { status: 400 }
    );
  }

  // try {
  //   // Upload the image to Cloudinary
  //   const uploadResponse = await cloudinary.uploader.upload(
  //     imageFile.stream(),
  //     {
  //       // public_id: "blogs",
  //       folder: "blog_images",
  //       resource_type: "auto", // Automatically determine the resource type
  //     }
  //   );

  //   // Save the blog post to MongoDB
  //   const newBlog = new Blog({
  //     title,
  //     heading,
  //     content,
  //     sub_content,
  //     image: uploadResponse.secure_url,
  //     publishDate: Date.now(),
  //   });

  //   await newBlog.save();

  //   return NextResponse.json(
  //     { message: "Blog post uploaded successfully.", success: true },
  //     { status: 201 }
  //   );
  // } catch (error) {
  //   console.error("Server error:", error);
  //   return NextResponse.json(
  //     { message: "Server error occurred", success: false },
  //     { status: 500 }
  //   );
  // }

  try {
    // Upload the base64 image to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(imageData, {
      folder: "blog_images",
      resource_type: "auto", // Automatically determine the resource type
    });

    // Save the blog post to MongoDB
    const newBlog = new Blog({
      title,
      heading,
      content,
      sub_content,
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
