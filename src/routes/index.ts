import { Router } from "express";
import carsRouter from "./carsRouter.js";

const router = Router();

router.use("/cars", carsRouter);

export default router;