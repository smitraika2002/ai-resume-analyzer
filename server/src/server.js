import dotenv from "dotenv";
dotenv.config(); // 🔥 MUST BE FIRST LINE

import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post("/analyze", (req, res) => {
  res.json({ message: "Analyze route working ✅" });
});

app.post("/analyze", (req, res) => {
  res.json({ message: "Backend working ✅" });
});