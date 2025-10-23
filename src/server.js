import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// 🧱 Basic password protection
app.use((req, res, next) => {
 
});


