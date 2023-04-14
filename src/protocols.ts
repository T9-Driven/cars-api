import { cars, categories } from "@prisma/client";

export type CarInput = Omit<cars, "id" | "createAt" | "categoryId">;

export type CategoryInput = Omit<categories, "id">;
