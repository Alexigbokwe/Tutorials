class UserRequest {
  private first_name: string;
  private last_name: string;
  private email: string;
  private password: string;

  constructor(data: object) {
    this.first_name = data["first_name"];
    this.last_name = data["last_name"];
    this.email = data["email"];
    this.password = data["password"];
  }

  /**
   * Getter $first_name
   * @return {string}
   */
  public get $first_name(): string {
    return this.first_name;
  }

  /**
   * Setter $first_name
   * @param {string} value
   */
  public set $first_name(value: string) {
    this.first_name = value;
  }

  /**
   * Getter $last_name
   * @return {string}
   */
  public get $last_name(): string {
    return this.last_name;
  }

  /**
   * Setter $last_name
   * @param {string} value
   */
  public set $last_name(value: string) {
    this.last_name = value;
  }

  /**
   * Getter $email
   * @return {string}
   */
  public get $email(): string {
    return this.email;
  }

  /**
   * Setter $email
   * @param {string} value
   */
  public set $email(value: string) {
    this.email = value;
  }

  /**
   * Getter $password
   * @return {string}
   */
  public get $password(): string {
    return this.password;
  }

  /**
   * Setter $password
   * @param {string} value
   */
  public set $password(value: string) {
    this.password = value;
  }
}

export default UserRequest;
