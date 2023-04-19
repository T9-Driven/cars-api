import { Router } from "express";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware";
import { categorySchema } from "../schemas/categorySchema";
import categoryController from "../controllers/categoryController";

const categoriesRouter = Router();

categoriesRouter.post(
  "/",
  validateSchemaMiddleware(categorySchema),
  categoryController.createCategory
);

export default categoriesRouter;
