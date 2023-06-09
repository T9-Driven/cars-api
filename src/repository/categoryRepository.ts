import prisma from "../config/database";

async function createCategory(name: string) {
  await prisma.categories.create({
    data: { name },
  });
}

export default { createCategory };
