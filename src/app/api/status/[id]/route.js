import dbConnect from "@/lib/connection";
import { Status } from "@/lib/models/Status";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function PUT(req, { params }) {
  const payload = await req.json();
  const id = params.id;

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

  if (!payload.status || !payload.id) {
    return NextResponse.json(
      { result: "Required valid id and status", success: false },
      { status: 400 }
    );
  }

  await dbConnect();
  const updateStatus = await Status.findByIdAndUpdate(
    { _id: id },
    {
      status: payload.status,
      id: payload.id,
    }
  );

  if (!updateStatus) {
    return NextResponse.json(
      { result: "Status Updated Failed", success: false },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { result: "Status Updated", success: true },
    { status: 200 }
  );
}
