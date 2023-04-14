import prisma from "../config/database.js";

async function createCategory(name: string) {
  await prisma.categories.create({
    data: { name },
  });
}

export default { createCategory };
