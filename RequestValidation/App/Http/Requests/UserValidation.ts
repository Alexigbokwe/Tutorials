"use strict";
import FormRequest from "Elucidate/Validator/FormRequest";

class UserValidation extends FormRequest {
  /**
   * Handle the request validation.
   * @param {*} data | e.g request body
   */
  async validate<T>(data: T) {
    return await FormRequest.make<T>(data, {
      first_name: "required|string|min:2",
      last_name: "required|string|min:2",
      email: "required|email",
      password: "required|min:5",
    });
  }
}

export default new UserValidation();
