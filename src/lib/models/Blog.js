import mongoose from "mongoose";

const BlogSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    views: { type: Number, default: 0 },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    category: { type: String, required: true },
    image: { type: String, required: true },
    publishDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
