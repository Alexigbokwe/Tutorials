"use strict";
import IUser from "App/DTO/User/IUser";
import { Model } from "Elucidate/Database/Model";

class User extends Model implements IUser {
  id!: number;
  first_name!: string;
  last_name!: string;
  email!: string;
  password!: string;
  // Table name
  static tableName = "users";
}

export default User;
