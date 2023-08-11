import { Router } from "express";
import middlewares from "../middlewares";
import { addressCreateSchema } from "../schemas";
import { addressControllers } from "../controllers";
import { addressUpdateSchema } from "../schemas/address.schemas";

export const addressRouter: Router = Router();

addressRouter.post(
  "/:id",
  middlewares.userExists,
  middlewares.alreadyHasAddress,
  middlewares.validateBody(addressCreateSchema),
  addressControllers.create
);

addressRouter.get("/:id", middlewares.userExists, addressControllers.read);

addressRouter.patch(
  "/:idAddress",
  middlewares.addressExists,
  middlewares.verifyToken,
  middlewares.isAddressOwner,
  middlewares.validateBody(addressUpdateSchema),
  addressControllers.update
);

addressRouter.delete(
  "/:idAddress",
  middlewares.addressExists,
  middlewares.verifyToken,
  middlewares.isAddressOwner,
  addressControllers.destroy
);
