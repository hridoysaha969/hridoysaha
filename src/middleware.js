import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const url = request.url;
  const cookieStore = cookies();
  const tokenCookie = cookieStore.get("_hs_User_access_token"); //Get The Cookie Object

  const token = tokenCookie?.value || "";

  //   console.log(token);
  if (!token && url.includes("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (!token && url.includes("/checkout")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token) {
    try {
      const { payload } = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET)
      );
      if (!payload && url.includes("/dashboard")) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
      if (!payload && url.includes("/checkout")) {
        return NextResponse.redirect(new URL("/login", request.url));
      }

      if (
        payload.role !== process.env.ADMIN_AUTH_VALUE &&
        url.includes("/dashboard")
      ) {
        return NextResponse.redirect(new URL("/", request.url));
      }
      // if (payload.role !== "admin" && url.includes("/api/message")) {
      //   return NextResponse.redirect(new URL("/", request.url));
      // }

      if (payload && url.includes("/login")) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    } catch (err) {
      console.log("verification failed!", err.message);
      if (err && url.includes("/dashboard")) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
      if (err && url.includes("/checkout")) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
    }
  }
}
