const { default: mongoose } = require("mongoose");

const MessageSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const Message =
  mongoose.models.Message || mongoose.model("Message", MessageSchema);
