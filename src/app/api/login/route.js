import dbConnect from "@/lib/connection";
import { User } from "@/lib/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const payload = await req.json();
  await dbConnect();

  if (!payload.email || !payload.password) {
    return NextResponse.json(
      { message: "Email and Password are required", success: false },
      { status: 400 }
    );
  }

  const user = await User.findOne({ email: payload.email });

  if (!user) {
    return NextResponse.json(
      { message: "Invalid email", success: false },
      { status: 401 }
    );
  }

  const isPasswordValid = await bcrypt.compare(payload.password, user.password);
  if (!isPasswordValid) {
    return NextResponse.json(
      { message: "Invalid password", success: false },
      { status: 401 }
    );
  }

  // Update last login date
  user.lastLogin = new Date();
  await user.save();

  // Generate JWT token
  const token = jwt.sign(
    {
      email: user.email,
      userID: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "15d" }
  );

  const response = NextResponse.json(
    { token, message: "Logged in successfully", success: true },
    { status: 200 }
  );

  response.cookies.set("_hs_User_access_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    maxAge: 3600 * 24 * 15, // 15 days
    sameSite: "strict",
    path: "/",
  });

  return response;
}
