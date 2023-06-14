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
export const getFiles = async (req, res) => {
  try {
    const AllFiles = await File.find({});
    const files = AllFiles.map((file) => {
      return {
        name: file.name,
        id: file.id,
      };
    });
    res.status(200).send(files);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};
export const downloadFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }
    file.downloadCount++;
    await file.save();
    res.download(file.path, file.name);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error while downloading file");
  }
};
