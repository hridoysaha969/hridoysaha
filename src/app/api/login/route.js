import dbConnect from "@/lib/connection";
import { User } from "@/lib/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import mongoose from "mongoose";

export async function POST(req) {
  const payload = await req.json();
  // await mongoose.connect(connectionStr);
  await dbConnect();

  const user = await User.findOne({ email: payload.email });
  // if (!user) {
  //   return NextResponse.json(
  //     { message: "Invalid email", success: false },
  //     { status: 401 }
  //   );
  // }

  // const isPasswordValid = await bcrypt.compare(payload.password, user.password);
  // if (!isPasswordValid) {
  //   return NextResponse.json(
  //     { message: "Invalid password", success: false },
  //     { status: 401 }
  //   );
  // }

  // Update last login date
  // user.lastLogin = new Date();
  // await user.save();

  // Generate JWT token
  // const token = jwt.sign(
  //   {
  //     email: user.email,
  //     userID: user._id,
  //     role: user.role,
  //   },
  //   process.env.JWT_SECRET,
  //   { expiresIn: "1h" }
  // );

  // Set the JWT as a cookie using JS_COOKIE
  // const cookieStore = cookies();
  // cookieStore.set("_hs_User_access_token", token, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV !== "development", // Use 'secure' in production
  //   maxAge: 3600 * 24 * 7, // 1 hour in seconds
  //   sameSite: "strict",
  //   path: "/",
  // });

  // return NextResponse.json(
  //   { token, message: "Logged in successfully", success: true },
  //   { status: 200 }
  // );

  return NextResponse.json({ body: user, success: true });

  // const response = NextResponse.json(
  //   { token, message: "Logged in successfully", success: true },
  //   { status: 200 }
  // );

  // response.cookies.set("_hs_User_access_token", token, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV !== "development",
  //   maxAge: 3600 * 24 * 7, // 1 week
  //   sameSite: "strict",
  //   path: "/",
  // });

  // return response;
}
