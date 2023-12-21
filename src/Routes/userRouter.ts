import { Router } from "express";
import UserController from "../Controller/userController";
const userRouter = Router();

const userController = new UserController();

userRouter.post("/", userController.createuser.bind(userController));
userRouter.get("/getUsers", userController.getUsers.bind(userController));

export default userRouter;
