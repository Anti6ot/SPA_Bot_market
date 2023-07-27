const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    desc: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Quality", schema);
