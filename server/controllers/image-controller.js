import File from "../models/fileSchema.js";

export const uploadImage = async (req, res) => {
  try {
    console.log("came to upload image");
    const fileObj = {
      path: req.file.path,
      name: req.file.originalname,
      downloadCount: 0,
    };
    const file = await File.create(fileObj);
    console.log("file uploaded successfully");
    res.status(200).json({ message: "File uploaded successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};
