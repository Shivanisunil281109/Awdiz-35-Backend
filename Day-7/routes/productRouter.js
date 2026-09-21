import {Router} from "express";
import { createProduct,getAllProduct } from "../controllers/ProductController.js";


const productRouter = Router();


productRouter.post('/',createProduct);

productRouter.get('/',(getAllProduct));


export default productRouter;