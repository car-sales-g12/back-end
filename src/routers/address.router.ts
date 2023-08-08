import { Router } from "express";
import middlewares from "../middlewares";
import { addressCreateSchema } from "../schemas";
import { addressControllers } from "../controllers";

export const addressRouter: Router = Router();

addressRouter.post(
  "/:id",
  middlewares.userExists,
  middlewares.verifyToken,
  middlewares.isOwner,
  middlewares.validateBody(addressCreateSchema),
  addressControllers.create
);

addressRouter.get("/:id", middlewares.userExists, addressControllers.read);

// addressRouter.patch(
//   "/:id",
//   middlewares.userExists,
//   middlewares.verifyToken,
//   middlewares.isOwner,
//   middlewares.validateBody(userUpdateschema),
//   middlewares.uniqueEmail,
//   middlewares.uniqueCpf,
//   addressControllers.update
// );

// addressRouter.delete(
//   "/:id",
//   middlewares.userExists,
//   middlewares.verifyToken,
//   middlewares.isOwner,
//   addressControllers.destroy
// );
