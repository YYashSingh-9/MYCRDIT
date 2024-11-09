const express = require("express");
const path = require("path");
const xss = require("xss");
const mongosanitize = require("express-mongo-sanitize");
const cookieParser = require("cookie-parser");
const rateLimiter = require("express-rate-limit");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use(cookieParser());
app.use(mongosanitize());
app.use(xss());

const limiter = rateLimiter({
  max: 100,
  windowMs: 60 * 1000,
  message:
    "Request limits reached from this IP Address, try again after some time.",
});

app.use("/mycrdit/api", limiter);

app.use((err, req, res, next) => {});
module.exports = app;
