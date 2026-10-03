import {Router} from "express";
import userRouter from "./userRouter.js";

const mainRouter = Router();

mainRouter.use("/users",userRouter);

export default mainRouter;

