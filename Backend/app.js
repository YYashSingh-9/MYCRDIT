const express = require("express");
const path = require("path");
const xss = require("xss");
const mongosanitize = require("express-mongo-sanitize");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use(cookieParser());
app.use(mongosanitize());
app.use(xss());

app.use((err, req, res, next) => {});
module.exports = app;
