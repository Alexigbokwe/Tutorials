import IUser from "./IUser";

class UserResponse implements IUser {
  id!: number;
  first_name!: string;
  last_name!: string;
  email!: string;
  password!: string;

  constructor(user: IUser) {
    this.id = user.id;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.password = user.password;
  }
}

export default UserResponse;
