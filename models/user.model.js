const mongoose = require("mongose");
const userSchema = mongoose.Schem({
  id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.module("User", userSchema);
