const { default: mongoose } = require("mongoose");

const BlogSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  slug: {
    type: String,
    unique: true,
    required: true,
  },
  category: { type: String, required: true },
  image: { type: String, required: true },
  publishDate: { type: Date, default: Date.now },
});

export const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
