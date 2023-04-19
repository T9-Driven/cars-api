import { Router } from "express";
import carsRouter from "./carsRouter";
import categoriesRouter from "./categoriesRouter";

const router = Router();

router.use("/cars", carsRouter);
router.use("/categories", categoriesRouter);

export default router;
