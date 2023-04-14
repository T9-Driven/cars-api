import { cars } from "@prisma/client";
import prisma from "../config/database.js";
import { CarInput } from "../protocols.js";

async function getCars(): Promise<cars[]> {
  const data = await prisma.cars.findMany();
  return data;
}

async function getCar(id: number) {
  const data = await prisma.cars.findFirst({
    where: { id },
    select: {
      id: true,
      model: true,
      licensePlate: true,
      year: true,
      color: true,
      createAt: false,
      categoryId: false,
      category: {
        select: {
          name: true,
        },
      },
    },
  });
  await prisma.$disconnect();
  return data;
}

async function getCarWithLicensePlate(licensePlate: string): Promise<cars> {
  const data = await prisma.cars.findFirst({ where: { licensePlate } });
  return data;
}

async function createCar({ model, licensePlate, year, color }: CarInput) {
  await prisma.cars.create({
    data: {
      color,
      licensePlate,
      model,
      year,
    },
  });
}

async function deleteCar(id: number) {
  await prisma.cars.delete({ where: { id } });
}

async function updateCar(id: number, car: CarInput) {
  await prisma.cars.update({ where: { id }, data: car });
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar,
  updateCar,
};

export default carRepository;
