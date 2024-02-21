import {Router} from "express";
import sellersController from "../controllers/sellersController.js"

const sellersRouter = Router();

sellersRouter.route("/").post(sellersController.createProduct);

export default sellersRouter;