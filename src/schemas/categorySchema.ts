import joi from "joi";
import { CategoryInput } from "../protocols";

export const categorySchema = joi.object<CategoryInput>({
  name: joi.string().required(),
});

