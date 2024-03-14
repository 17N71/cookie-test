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
    secure: true,
    httpOnly: true,
    sameSite: "none",
    priority: "high",
    signed: false,
    domain: "netlify.app",
    path: "/",
    expires: 86400000,
    maxAge: 86400000,
  });

  res.send("ok");
});

module.exports = app;
