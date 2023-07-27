const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    login: {
      type: String,
    },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    image: String,
    doj: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", schema);
