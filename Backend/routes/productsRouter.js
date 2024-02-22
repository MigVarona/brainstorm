import { Router } from "express";
import productsController from "../controllers/productsController.js"

const productsRouter = Router();

productsRouter.route("/").get(productsController.getAllProducts);
productsRouter.route("/:id").get(productsController.getProductById);
productsRouter.route("/").post(productsController.createProduct);

export default productsRouter;