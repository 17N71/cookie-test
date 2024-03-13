const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors("*"));

app.post("/auth", (req, res) => {
  res.cookie("myCookie", "cookie", {
    maxAge: 86400000,
    httpOnly: true,
    secure: false,
    sameSite: "none",
  });
  res.send("ok");
});
