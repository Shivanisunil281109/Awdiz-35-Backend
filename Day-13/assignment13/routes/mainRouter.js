import{Router} from "express";
import salesRouter from "./salesRouter.js";



const mainRouter = Router();

mainRouter.use("/sales",salesRouter);


export default mainRouter;
