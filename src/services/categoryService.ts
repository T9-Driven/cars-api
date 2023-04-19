import categoryRepository from "../repository/categoryRepository";

async function createCategory(name: string) {
  await categoryRepository.createCategory(name);
}

export default {
  createCategory,
};
