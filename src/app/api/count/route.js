import dbConnect from "@/lib/connection";
import { Blog } from "@/lib/models/Blog";
import { Message } from "@/lib/models/Message";
import { User } from "@/lib/models/User";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function GET() {
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

  try {
    await dbConnect();

    const userCount = await User.countDocuments();
    const blogCount = await Blog.countDocuments();
    const messageCount = await Message.countDocuments();

    return NextResponse.json(
      {
        success: true,
        data: {
          users: userCount,
          blogs: blogCount,
          messages: messageCount,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error fetching count data" },
      { status: 500 }
    );
  }
}
