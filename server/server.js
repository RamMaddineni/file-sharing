import express from "express";
import multer from "multer";
import cors from "cors";
import File from "./models/fileSchema.js";
import mongoose from "mongoose";
const upload = multer();
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/fileDB");
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/api/files", async (req, res) => {
  try {
    const files = await File.find({});
    res.send(files);
  } catch (err) {
    console.log(err.message);
  }
});
app.post("/api/upload", upload.single("file"), async (req, res) => {
  const { originalname, mimetype, buffer } = req.file;
  const file = new File({
    name: originalname,
    file: { data: buffer, contentType: mimetype },
  });
  try {
    await file.save();
    console.log("File saved to mongoDB");
  } catch (err) {
    console.log(err.message);
  }
  console.log(req.body);
  res.send("File uploaded");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
