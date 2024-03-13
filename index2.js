const express = require("express");
const app = express();

app.post("/set-cookie", (req, res) => {
  res.cookie("myCookie", "cookie", {
    maxAge: 86400000,
    httpOnly: true,
    secure: false,
    sameSite: "none",
  });
  res.send("ok");
});
