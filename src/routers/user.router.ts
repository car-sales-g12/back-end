import { Router } from "express";
import userControllers from "../controllers/user.controllers";
import middlewares from "../middlewares";
import { userCreateSchema } from "../schemas";

export const userRouter: Router = Router();

userRouter.post(
  "",
  middlewares.validateBody(userCreateSchema),
  middlewares.uniqueEmail,
  middlewares.uniqueCpf,
  userControllers.create
);
