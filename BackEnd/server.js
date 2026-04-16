require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Contact route
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Incoming contact form:");
  console.log({ name, email, message });

  res.json({ success: true });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});