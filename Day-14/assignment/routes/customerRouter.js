import {Router} from "express";
import { createCustomer, getAllCustomers } from "../controllers/CustomerController.js";

const customerRouter =Router();

customerRouter.post("/",createCustomer);

customerRouter.get("/", getAllCustomers)


export default  customerRouter;
