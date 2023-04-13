import { cars } from "@prisma/client";

export type CarInput = Omit<cars, "id" | "createAt" | "categoryId">