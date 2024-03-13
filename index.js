const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const indexRouter = require("./routes");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(
  cors({
    origin: "https://cookiefront.netlify.app",
    credentials: true,
    allowedHeaders: true,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

module.exports = app;
