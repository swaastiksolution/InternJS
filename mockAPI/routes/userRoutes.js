import express from "express";
import { getAllUsers, createUser } from "../controllers/userController.js";
import dummyAuth from "../middlewares/dummyAuth.js";


const userRoute = express.Router();

userRoute.route("/")
    .get(getAllUsers) // get all users?
    .post(createUser) // create a new user

userRoute.route("/:id")
    .get(getAllUsers) // get single user;
//.patch()
//.delete();

export default userRoute;