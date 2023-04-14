import categoryRepository from "../repository/categoryRepository.js";

async function createCategory(name: string) {
  await categoryRepository.createCategory(name);
}

export default {
  createCategory,
};
