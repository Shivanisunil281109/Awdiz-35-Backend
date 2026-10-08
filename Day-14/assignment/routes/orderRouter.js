import {Router} from "express";
import { createOrder } from "../controllers/OrderController.js";

const orderRouter =Router();

orderRouter.post("/",createOrder);


export default orderRouter;