import { Router } from "express";
import carsRouter from "./carsRouter.js";
import categoriesRouter from "./categoriesRouter.js";

const router = Router();

router.use("/cars", carsRouter);
router.use("/categories", categoriesRouter);

export default router;
