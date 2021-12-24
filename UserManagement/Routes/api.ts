import Route from "Elucidate/Route/manager";
import { Request, Response, NextFunction } from "Elucidate/HttpContext";
/*
    |--------------------------------------------------------------------------
    | Api route   
    |--------------------------------------------------------------------------
    |
    | Here is where you can register your application routes. These
    | routes are loaded by the RouteProvider. Now create something great!
    |
*/

Route.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome to ExpressWebJs Typescript Version");
});

Route.get("/user/all", "UserController@index");

Route.post("/user/save", "UserController@store");

Route.get("/user/getUser/:user_id", "UserController@show");

Route.patch("/user/update/:user_id", "UserController@update");

Route.delete("/user/delete/:user_id", "UserController@destroy");

//--------------------------------------------------------------------------
export default Route.exec;
