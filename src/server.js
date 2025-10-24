const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// --- API routes (example) ---
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from your backend!" });
});

// --- Serve the static frontend ---
const CLIENT_DIR = path.join(__dirname, "../frontend"); // ../ from backend/ to frontend/
app.use(express.static(CLIENT_DIR));

// SPA/Default fallback to index.html (so /, /about, etc. work)
app.get("*", (req, res) => {
  res.sendFile(path.join(CLIENT_DIR, "index.html"));
});

app.listen(PORT, () => console.log(`Running on ${PORT}`));