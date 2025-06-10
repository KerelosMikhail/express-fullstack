const express = require("express");

const app = express();

app.use((erq, res, next) => {
  console.log("Request received!");
  next();
});

app.use((erq, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: "Your request was successful" });
});

app.use((erq, res, next) => {
  console.log("Response sent!");
  next();
});

module.exports = app;
