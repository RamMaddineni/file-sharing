import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err.message);
  }
};
export default DBConnection;
