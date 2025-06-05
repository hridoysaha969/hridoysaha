const { default: mongoose } = require("mongoose");

const viewSchema = new mongoose.Schema({
  blogId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Blog" },
  ip: { type: String, required: true },
  lastViewedAt: { type: Date, default: Date.now },
});

viewSchema.index({ blogId: 1, ip: 1 }, { unique: true });

export const BlogViews =
  mongoose.models.View || mongoose.model("View", viewSchema);
