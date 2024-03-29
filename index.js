const express = require("express");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: "https://cookiefront.netlify.app",
    credentials: true,
  })
);

app.post("/auth", (req, res) => {
  res.cookie("myCookie", "cookie", {
    maxAge: 86400000,
    httpOnly: true,
    secure: true,
    sameSite: "none",
    priority: "low",
  });
  res.appendHeader("my", "cookie");

  res.send("ok");
});

module.exports = app;
