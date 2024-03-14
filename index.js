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
    httpOnly: false,
    sameSite: "none",
    domain: ".netlify.app",
  });

  res.send("ok");
});

module.exports = app;
