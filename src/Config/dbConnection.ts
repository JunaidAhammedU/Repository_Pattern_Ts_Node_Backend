import mongoose from "mongoose";
import env from "dotenv";
env.config();

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect("mongodb://127.0.0.1:27017/UserManagement");
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed", error);
  }
};

export default dbConnect;
