const mongoose = require("mongoose");
const config = require("./config");

require("../config/db");

const dbURL = config.db.url;

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("mongodb atlas is connected");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
