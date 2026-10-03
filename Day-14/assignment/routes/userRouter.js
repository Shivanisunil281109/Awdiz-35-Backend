
import {Router}  from "express";
import { createUser, getAllUsers} from "../controllers/UserController.js";

const userRouter = Router();


userRouter.post("/",createUser);

userRouter.get("/", getAllUsers);

export default userRouter;