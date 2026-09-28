import {Router} from "express";
import { createProduct,getAllProduct, operators } from "../controllers/ProductController.js";


const productRouter = Router();


productRouter.post('/',createProduct);

productRouter.get('/',(getAllProduct));


productRouter.get("/operators",operators)


export default productRouter;