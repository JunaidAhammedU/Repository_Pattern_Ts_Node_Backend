import { IUser } from "../Model/userModel";
import UserRepository from "../Repository/userRepository";

interface IUserService {
  createUser(user: IUser): Promise<responseT | null>;
  getUsers(): Promise<responseT | null>;
}

type responseT = {
  status: boolean;
  message: string;
  data?: IUser[] | IUser | null;
};

export default class UserService implements IUserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(user: IUser): Promise<responseT | null> {
    const response: responseT = {
      status: false,
      message: "",
    };
    try {
      const data = await this.userRepository.createuser(user);
      if (data) {
        response.status = true;
        response.message = "user created";
      } else {
        response.status = false;
        response.message = "user not created";
      }
      return response;
    } catch (error) {
      return null;
    }
  }

  // get all users
  async getUsers(): Promise<responseT | null> {
    const response: responseT = {
      status: false,
      message: "",
      data: null,
    };
    try {
      const data = await this.userRepository.getUsers();
      if (data) {
        response.status = true;
        response.message = "data fetched";
        response.data = data;
      } else {
        response.status = false;
        response.message = "error";
      }
      return response;
    } catch (error) {
      return null;
    }
  }
}
