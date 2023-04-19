import notFoundError from "../errors/notFoundError";
import conflictError from "../errors/conflictError";
import carRepository from "../repository/carRepository";
import { CarInput } from "../protocols";

async function getCars() {
  const cars = await carRepository.getCars();
  return cars;
}

async function getCar(id: number) {
  const car = await carRepository.getCar(id);
  if (!car) {
    throw notFoundError();
  }

  return car;
}

async function createCar({ model, licensePlate, year, color }: CarInput) {
  const car = await carRepository.getCarWithLicensePlate(licensePlate);
  if (car) {
    throw conflictError(
      `Car with license plate ${licensePlate} already registered.`
    );
  }

  await carRepository.createCar({ model, licensePlate, year, color });
}

async function deleteCar(id: number) {
  await getCar(id);
  await carRepository.deleteCar(id);
}

async function updateCar(id: number, car: CarInput) {
  await getCar(id);
  await carRepository.updateCar(id, car);
}

async function createOrUpdateCar(car: CarInput) {
  await carRepository.createOrUpdateCar(car);
}

const carService = {
  getCars,
  getCar,
  createCar,
  deleteCar,
  updateCar,
  createOrUpdateCar,
};

export default carService;
