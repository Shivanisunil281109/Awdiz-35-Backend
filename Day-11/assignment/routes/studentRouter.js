import{Router} from "express";
import { createStudent,getAllStudents ,operators} from "../controllers/StudentController.js";

const studentRouter = Router();

studentRouter.post("/",createStudent);

studentRouter.get("/", getAllStudents);


studentRouter.get("/operators", operators);

export default studentRouter;