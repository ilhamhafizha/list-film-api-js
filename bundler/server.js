import express from "express";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";
dotenv.config();
// Karena __dirname tidak tersedia di ESM, kita buat manual:
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.use(express.static(path.join(__dirname, "./")));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./", "index.html"));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
