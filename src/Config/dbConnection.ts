import mongoose from "mongoose";
import env from "dotenv";
env.config();

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect("mongodb+srv://junaid:Junaid3337@cluster0.7vkcbji.mongodb.net/?retryWrites=true&w=majority");
    console.log("DB contected");
  } catch (error) {
    console.log("Database connection failed", error);
  }
};

export default dbConnect;