import httpStatus from "http-status";

import { Request, Response } from "express";
import { CategoryInput } from "../protocols.js";
import categoryService from "../services/categoryService.js";

async function createCategory(req: Request, res: Response) {
  const { name } = req.body as CategoryInput;

  try {
    await categoryService.createCategory(name);
    res.sendStatus(httpStatus.CREATED);
  } catch (e) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export default {
  createCategory,
};
