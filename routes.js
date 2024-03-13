const express = require("express");
const router = express.Router();

const whitePixel = "R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=";

const getPixelResponse = res => {
  res.header("Content-type", "application/json");
  res.header("Access-Control-Allow-Credentials", true);
  // res.end(Buffer.from(whitePixel, "base64"));

  res.end();
};

const getMaxAge = () => 60 * 60 * 24 * 1000 * 365;

const cookieName = "myCookie";

router.post("/auth", function (req, res, next) {
  if (!req.cookies[cookieName]) {
    res.cookie(cookieName, "test", {
      maxAge: getMaxAge(),
      httpOnly: false,
      domain: "netlify.app",
      secure: true,
      sameSite: "none",
    });
  }

  getPixelResponse(res);
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
