import { Router } from "express";
import carController from "../controllers/carsController";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware";
import { carSchema } from "../schemas/carSchema";

const carsRouter = Router();

carsRouter.get("/", carController.getAllCars);
carsRouter.get("/:carId", carController.getSpecificCar);
carsRouter.post(
  "/",
  validateSchemaMiddleware(carSchema),
  carController.createCar
);
carsRouter.delete("/:carId", carController.deleteCar);
carsRouter.patch("/:carId", carController.updateCar);
carsRouter.post("/create-update", carController.createOrUpdateCar);

export default carsRouter;
