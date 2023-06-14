import express from "express";
const router = express.Router();
import upload from "../util/file-upload.js";
import { uploadImage } from "../controllers/image-controller.js";
router.post("/api/upload", upload.single("file"), uploadImage);
// in front end i attached file to key "file" in FormData so i am using single("file").
export default router;
