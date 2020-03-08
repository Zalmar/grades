const { Schema, model } = require("mongoose");

const schema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});

module.exports = model("User", schema);
