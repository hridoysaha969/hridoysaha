const { default: mongoose } = require("mongoose");

const statusModel = mongoose.Schema({
  status: { type: String, required: true },
});

export const Status =
  mongoose.models.Status || mongoose.model("Status", statusModel);
