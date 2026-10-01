import {Router} from "express";
import { createProduct,getAllProduct, operators,aggregationPipeline } from "../controllers/ProductController.js";


const productRouter = Router();


productRouter.post('/',createProduct);

productRouter.get('/',(getAllProduct));

productRouter.get("/operators",operators)

productRouter.get("/aggregation-pipeline", aggregationPipeline)

export default productRouter;