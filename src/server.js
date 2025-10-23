import express from "express";
import dotenv from "dotenv";

const express = require("express");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is live on Render 🚀");
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));