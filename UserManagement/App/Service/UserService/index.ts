"use strict";
import IUser from "App/DTO/User/IUser";
import UserRequest from "App/DTO/User/UserRequest";
import UserResponse from "App/DTO/User/UserResponse";
import UserRepository from "App/Repository/UserRepository";
import IUserService from "./IUserService";
import Hash from "Elucidate/Hashing/Hash";

class UserService implements IUserService {
  async getAllUsers(): Promise<UserResponse[]> {
    return new Promise(async (resolve, reject) => {
      try {
        let users = <IUser[]>await new UserRepository().getAll();
        let userResponse: UserResponse[] = users.map((user) => {
          return new UserResponse(user);
        });
        resolve(userResponse);
      } catch (error) {
        reject(error);
      }
    });
  }

  async getUser(user_id: number): Promise<UserResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        let user = <IUser>await new UserRepository().findById(user_id);
        resolve(new UserResponse(user));
      } catch (error) {
        reject(error);
      }
    });
  }

  async saveUser(user: UserRequest): Promise<UserResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const HashedPassword = await Hash.make(user.$password);
        const userData = {
          first_name: user.$first_name,
          last_name: user.$last_name,
          email: user.$email,
          password: HashedPassword,
        };
        let savedUser = <IUser>await new UserRepository().create(userData);
        resolve(new UserResponse(savedUser));
      } catch (error) {
        reject(error);
      }
    });
  }

  async updateUser(user_id: number, user: UserRequest): Promise<UserResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const HashedPassword = await Hash.make(user.$password);
        const userData = {
          first_name: user.$first_name,
          last_name: user.$last_name,
          email: user.$email,
          password: HashedPassword,
        };
        let updatedUser = <IUser>await new UserRepository().updateOne(user_id, userData);
        resolve(new UserResponse(updatedUser));
      } catch (error) {
        reject(error);
      }
    });
  }

  deleteUser(user_id: number): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        await new UserRepository().deleteById(user_id);
        resolve("User Successfully removed");
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default UserService;
