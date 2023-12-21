import userModel, { IUser } from "../Model/userModel";

interface IUserRepo {
  createuser(user: IUser): Promise<IUser | null>;
  getUsers(): Promise<IUser[] | null>;
}

export default class UserRepository implements IUserRepo {
  async createuser(user: IUser): Promise<IUser | null> {
    try {
      return await userModel.create(user);
    } catch (error) {
      return null;
    }
  }

  // get all users
  async getUsers(): Promise<IUser[] | null> {
    try {
      return await userModel.find();
    } catch (error) {
      return null;
    }
  }
}
