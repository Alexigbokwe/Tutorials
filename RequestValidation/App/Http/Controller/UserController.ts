"use strict";
import UserRequest from "App/DTO/User/UserRequest";
import IUserService from "App/Service/UserService/IUserService";
import { Request, Response, NextFunction } from "Elucidate/HttpContext";
import HttpResponse from "Elucidate/HttpContext/ResponseType";
import UserValidation from "App/Http/Requests/UserValidation";

class UserController {
  protected userService: IUserService;

  constructor(UserService: IUserService) {
    this.userService = UserService;
  }
  /**
   * Display a listing of the resource.
   * @method GET
   * @endpoint api/user/all
   * @param Request
   * @return Response
   */
  index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await this.userService
        .getAllUsers()
        .then((users) => {
          return HttpResponse.OK(res, users);
        })
        .catch((error) => {
          return HttpResponse.EXPECTATION_FAILED(res, error);
        });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * Store a newly created resource in storage.
   * @method POST
   * @endpoint api/user/save
   * @param Request
   * @return Response
   */
  store = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validate = await UserValidation.validate(req.body);
      if (!validate.success) return HttpResponse.BAD_REQUEST(res, validate.data);

      let user = new UserRequest(validate.data);
      return await this.userService
        .saveUser(user)
        .then((user) => {
          return HttpResponse.OK(res, user);
        })
        .catch((error) => {
          return HttpResponse.EXPECTATION_FAILED(res, error);
        });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * Display the specified resource.
   * @method GET
   * @endpoint api/user/getUser/:user_id
   * @param Request
   * @return Response
   */
  show = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await this.userService
        .getUser(Number(req.params["user_id"]))
        .then((user) => {
          return HttpResponse.OK(res, user);
        })
        .catch((error) => {
          return HttpResponse.EXPECTATION_FAILED(res, error);
        });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * Update the specified resource in storage.
   * @method PATCH
   * @endpoint api/user/update/:user_id
   * @param Request
   * @return Response
   */
  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validate = await Promise.all([await req.validate(req.params, { user_id: "required|string" }), await UserValidation.validate(req.body)]);
      if (!validate[0].success) return HttpResponse.BAD_REQUEST(res, validate[0].data);
      if (!validate[1].success) return HttpResponse.BAD_REQUEST(res, validate[1].data);

      let user_id = Number(validate[0].data["user_id"]);
      let userData = new UserRequest(validate[1].data);
      return await this.userService
        .updateUser(user_id, userData)
        .then((user) => {
          return HttpResponse.OK(res, user);
        })
        .catch((error) => {
          return HttpResponse.EXPECTATION_FAILED(res, error);
        });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * Remove the specified resource from storage.
   * @method DELETE
   * @endpoint api/user/delete/:user_id
   * @param Request
   * @return Response
   */
  destroy = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await this.userService
        .deleteUser(Number(req.params["user_id"]))
        .then((result) => {
          return HttpResponse.OK(res, result);
        })
        .catch((error) => {
          return HttpResponse.EXPECTATION_FAILED(res, error);
        });
    } catch (error) {
      return next(error);
    }
  };
}

export default UserController;
