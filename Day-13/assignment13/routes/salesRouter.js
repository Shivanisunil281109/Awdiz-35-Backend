import {Router} from "express";
import {createSale,getAllSales, aggregationPipeline } from "../controllers/SalesController.js";

const salesRouter =Router();

salesRouter.post("/", createSale);

salesRouter.get("/",getAllSales);

salesRouter.get("/aggregation",aggregationPipeline);


export default salesRouter;