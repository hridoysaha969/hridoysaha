const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  aggrement: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
  lastLogin: { type: Date },
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
