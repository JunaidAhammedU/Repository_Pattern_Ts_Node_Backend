import express from "express";
import cors from "cors";
import userRouter from "./Routes/userRouter";
import dbConnect from "./Config/dbConnection";
const app = express();
//----------------------------------------------


// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(express.json());
dbConnect()
app.use("/", userRouter);


export default app;
