import { NextFunction, Request, Response } from "express";
import { Address } from "../entities";
import { addressRepository } from "../repositories";
import { AppError } from "../errors";

export const addressExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.id);

  const foundAddress: Address | null = await addressRepository.findOne({
    where: { id: id },
    relations: { user: true },
  });
  if (!foundAddress) throw new AppError("Announcement not found", 404);

  res.locals = { ...res.locals, foundAddress };

  return next();
};
