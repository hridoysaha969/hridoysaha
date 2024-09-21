import dbConnect from "@/lib/connection";
import { User } from "@/lib/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req) {
  const payload = await req.json();
  await dbConnect();

  // Checking if the email is exists or not
  const existingUser = await User.findOne({ email: payload.email });
  if (existingUser) {
    return NextResponse.json(
      { message: "User already exist", success: false },
      { status: 422 }
    );
  }

  // Encrypt the password
  const hashedPassword = await bcrypt.hash(payload.password, 12);
  const user = new User({
    name: payload.fullName,
    email: payload.email,
    password: hashedPassword,
    name: payload.fullName,
    role: payload.role,
    aggrement: payload.aggrement,
    createdAt: new Date(),
  });
  await user.save();

  // Generate JWT token
  const token = jwt.sign(
    {
      email: user.email,
      userID: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  // Set the JWT as a cookie using JS_COOKIE
  const cookieStore = cookies();
  cookieStore.set("_hs_User_access_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development", // Use 'secure' in production
    maxAge: 3600 * 24 * 7, // 1 hour in seconds
    sameSite: "strict",
    path: "/",
  });

  return NextResponse.json(
    { message: "New user has been created", success: true },
    { status: 201 }
  );
}
