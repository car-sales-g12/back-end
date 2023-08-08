import { NextFunction, Request, Response } from "express";
import { Address } from "../entities";
import { addressRepository } from "../repositories";
import { AppError } from "../errors";

export const addressExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const idAddress: number = Number(req.params.idAddress);

  const foundAddress: Address | null = await addressRepository.findOne({
    where: { id: idAddress },
    relations: { user: true },
  });
  if (!foundAddress) throw new AppError("Address not found", 404);

  res.locals = { ...res.locals, foundAddress };

  return next();
};
