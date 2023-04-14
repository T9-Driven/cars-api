import { Router } from "express";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware.js";
import { categorySchema } from "../schemas/categorySchema.js";
import categoryController from "../controllers/categoryController.js";

const categoriesRouter = Router();

categoriesRouter.post(
  "/",
  validateSchemaMiddleware(categorySchema),
  categoryController.createCategory
);

export default categoriesRouter;
