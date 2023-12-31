import { Request, Response } from "express";
import { IUser } from "../Model/userModel";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import UserService from "../Service/userService";
//-----------------------------------------------------------


// interface controller
interface IUserController {
  createuser(req: Request, res: Response): Promise<void>;
  getUsers(req: Request, res: Response): Promise<void>;
}

// user controller class
export default class UserController implements IUserController {
  private userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  // Create user
  async createuser(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ): Promise<void> {
    try {
      const user: IUser = req.body;
      const data = await this.userService.createUser(user);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  } 

  // Get all users
  async getUsers(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ): Promise<void> {
    try {
      const data = await this.userService.getUsers();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  }
}
