import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import products from "./data/products.js";

// dotenv
dotenv.config();

// DB connection
connectDB();

const app = express();

// routes
app.get("/", (req, res) => {
  res.send("API is running....");
});

// producst route
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
