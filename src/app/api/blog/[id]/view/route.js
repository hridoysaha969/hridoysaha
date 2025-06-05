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

    // Try to update an existing view if it's older than 12 hours
    const result = await BlogViews.findOneAndUpdate(
      {
        blogId,
        ip,
        $or: [
          { lastViewedAt: { $lt: new Date(now.getTime() - TWELVE_HOURS) } },
          { lastViewedAt: { $exists: false } },
        ],
      },
      { $set: { lastViewedAt: now } },
      { upsert: true, new: false } // new: false returns old doc before update
    );

    // If no previous document or outdated one, increment views
    if (!result) {
      await Blog.findByIdAndUpdate(blogId, { $inc: { views: 1 } });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
