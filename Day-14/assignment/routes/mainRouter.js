import {Router} from "express";
import userRouter from "./userRouter.js";
import customerRouter from "./customerRouter.js";
import orderRouter from "./orderRouter.js";




const mainRouter = Router();

mainRouter.use("/users",userRouter);

mainRouter.use("/customer",customerRouter);

mainRouter.use("/order",orderRouter)

export default mainRouter;

