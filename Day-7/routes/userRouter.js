import {Router} from "express";
import { createUser, getAllUsers } from "../controllers/userController.js";

const userRouter =Router();

userRouter.get("/",getAllUsers);

userRouter.post("/",createUser)



export default userRouter;