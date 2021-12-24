import UserRequest from "App/DTO/User/UserRequest";
import UserResponse from "App/DTO/User/UserResponse";

interface IUserService {
  getAllUsers(): Promise<UserResponse[]>;
  getUser(user_id: number): Promise<UserResponse>;
  saveUser(user: UserRequest): Promise<UserResponse>;
  updateUser(user_id: number, user: UserRequest): Promise<UserResponse>;
  deleteUser(user_id: number): Promise<string>;
}

export default IUserService;
