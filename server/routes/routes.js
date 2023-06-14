import express from "express";
const router = express.Router();
import upload from "../util/file-upload.js";
import {
  uploadImage,
  getFiles,
  downloadFile,
} from "../controllers/file-controller.js";

router.post("/api/upload", upload.single("file"), uploadImage);
// in front end i attached file to key "file" in FormData so i am using single("file").

router.get("/api/files", getFiles);
router.get("/api/download/:id", downloadFile);
export default router;
