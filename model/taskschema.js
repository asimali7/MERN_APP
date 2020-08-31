const mongoose = require("mongoose");

const taskSheme = mongoose.Schema({
  text: { type: String, required: true },
  value: { type: Number },
  editingmode: Boolean,
});

module.exports = mongoose.model("tasks", taskSheme);
