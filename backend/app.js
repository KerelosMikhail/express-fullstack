const express = require("express");

const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://kerelosmikhail:0M9bR06hdY0Go6NG@cluster0.kza7m8q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.log("Unable to connect");
  });

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.get("/api/stuff", (req, res, next) => {
  const stuff = [
    {
      _id: "oeihfzeoi",
      title: "My first thing",
      description: "All of the info about my first thing",
      imageUrl:
        "https://t3.ftcdn.net/jpg/00/79/36/04/360_F_79360425_13tH0FGR7nYTNlXWKOWtLmzk7BAikO1b.jpg",
      price: 4900,
      userId: "qsomihvqios",
    },
    {
      _id: "oeihfzeomoihi",
      title: "My second thing",
      description: "All of the info about my second thing",
      imageUrl:
        "https://t3.ftcdn.net/jpg/00/79/36/04/360_F_79360425_13tH0FGR7nYTNlXWKOWtLmzk7BAikO1b.jpg",
      price: 2900,
      userId: "qsomihvqios",
    },
  ];
  res.status(200).json(stuff);
});

app.post("/api/stuff", (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: "Things saved successfully",
  });
});

module.exports = app;

// app.use((erq, res, next) => {
//   console.log("Request received!");
//   next();
// });

// app.use((erq, res, next) => {
//   res.status(201);
//   next();
// });

// app.use((req, res, next) => {
//   res.json({ message: "Your request was successful" });
// });

// app.use((erq, res, next) => {
//   console.log("Response sent!");
//   next();
// });

// // Sample route
// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });
