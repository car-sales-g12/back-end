import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const isAddressOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const idUser = Number(res.locals.decoded.sub);

  const address = res.locals.foundAddress;
  if (!address) {
    throw new AppError("address not found.", 404);
  }
  if (address.user.id !== idUser) {
    throw new AppError("Insufficient permissions", 403);
  }

  return next();
};
