const express = require("express");
const router = express.Router();

const getPixelResponse = res => {};

const getMaxAge = () => 60 * 60 * 24 * 1000 * 365;

router.post("/auth", function (req, res, next) {
  res.header("Content-type", "application/json");
  res.header("Access-Control-Allow-Header", "Set-Cookie,Cookie");
  res.header("Access-Control-Allow-Credentials", true);
  res.appendHeader("set-cookie", "dasdsad");
  res.cookie("myCookie", "test", {
    maxAge: getMaxAge(),
    httpOnly: true,
    domain: "netlify.app",
    secure: true,
    sameSite: "none",
  });

  res.send("ok");
});

router.get("/test", function (req, res, next) {
  if (!req.cookies[cookieName]) {
    //Do something
  }

  res.cookie("new-cookie", "value", {
    maxAge: getMaxAge(),
    httpOnly: false,
    domain: "netlify.app",
    secure: true,
    sameSite: "none",
  });

  getPixelResponse(res);
});

module.exports = router;
