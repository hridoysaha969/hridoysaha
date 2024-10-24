import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/connection";
import { Status } from "@/lib/models/Status";

export async function GET(req) {
  await dbConnect();
  let result;

  try {
    const data = await Status.find();
    if (data) {
      result = data[0];
    }
  } catch (error) {
    return NextResponse.json(
      { result: error.message, success: false },
      { status: 400 }
    );
  }

  return NextResponse.json({ result, success: true }, { status: 200 });
}

export async function POST(req) {
  const payload = await req.json();
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
      { message: err.message, success: false },
      { status: 500 }
    );
  }

  await dbConnect();
  if (!payload.id) {
    const status = new Status({
      status: payload.status,
    });

    await status.save();

    return NextResponse.json(
      { result: "Status Created", success: true },
      { status: 201 }
    );
  } else {
    return NextResponse.json(
      {
        result: "Status already created! Can't created a new status",
        success: false,
      },
      { status: 400 }
    );
  }
}
