const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
      price: {
        type: Number
      },
      id: {
        type: String
      },
    add: {
      type: Boolean,
    }
  }
);

module.exports = model("DLC", schema);
