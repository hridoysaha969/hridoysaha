import dbConnect from "@/lib/connection";
import { Blog } from "@/lib/models/Blog";
import { BlogViews } from "@/lib/models/BlogViews";
import { NextResponse } from "next/server";

function getClientIp(headers) {
  return (
    headers.get("x-forwarded-for")?.split(",")[0] || // From proxy (like Vercel)
    headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(req, { params }) {
  const blogId = params.id;
  const headers = req.headers;
  const ip = getClientIp(headers);

  await dbConnect();

  try {
    const now = new Date();
    const TWELVE_HOURS = 12 * 60 * 60 * 1000;

    const existingView = await BlogViews.findOne({ blogId, ip });

    if (!existingView) {
      // No view exists yet from this IP, create one and increment view
      await BlogViews.create({ blogId, ip, lastViewedAt: now });
      await Blog.findByIdAndUpdate(blogId, { $inc: { views: 1 } });
    } else {
      const lastViewedAt = new Date(existingView.lastViewedAt || 0);

      // Check if 12 hours have passed
      if (now - lastViewedAt > TWELVE_HOURS) {
        existingView.lastViewedAt = now;
        await existingView.save();
        await Blog.findByIdAndUpdate(blogId, { $inc: { views: 1 } });
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
