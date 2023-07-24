const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  desc: {
    type: String,
  },
  id: {
    type: String,
  },
  add: {
    type: Boolean,
  },
});

module.exports = model("DLC", schema);
