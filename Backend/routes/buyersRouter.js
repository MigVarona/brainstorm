import {Router} from "express";
import buyersController from "../controllers/buyersController.js"

const buyersRouter = Router();

buyersRouter.route("/").get(buyersController.getAllProducts);
buyersRouter.route("/:id").get(buyersController.getProductById);