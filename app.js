const express = require("express");
require ("./config/db.js");
const cors = require("cors");
const userRouter = require("./routers/user.route");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "something broke",
  });
});
app.use((req, res, next) => {
  res.status(404).json({
    message: "route not found",
  });
});

module.exports = app;
