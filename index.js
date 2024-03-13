const express = require("express");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.post("/auth", (req, res) => {
  res.cookie("myCookie", "cookie", {
    maxAge: 86400000,
    httpOnly: false,
    secure: true,
    sameSite: "None",
    domain: ".netlify.app",
  });

  res.send("ok");
});

module.exports = app;
