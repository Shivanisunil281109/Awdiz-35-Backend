import {Router} from "express";
import productRouter from "./productRouter.js";
import userRouter from "./userRouter.js";
import adminRouter from "./adminRouter.js";


const mainRouter = Router();


mainRouter.use("/product",productRouter);
mainRouter.use("/user",userRouter);
mainRouter.use("/admin",adminRouter);




export default mainRouter;









// endpoint

// localhost:3000/api/product   ( post method - create product)
// localhost:3000/api/user     ( get method - get all product)