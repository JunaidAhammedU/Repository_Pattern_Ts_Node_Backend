import { IUser } from "../Model/userModel";
import UserRepository from "../Repository/userRepository";

interface IUserService {
  createUser(user: IUser): Promise<responseT | null>;
}

type responseT = {
  status: boolean;
  message: string;
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
}
