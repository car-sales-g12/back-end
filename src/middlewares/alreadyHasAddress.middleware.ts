import { NextFunction, Request, Response } from "express";
import { Address } from "../entities";
import { addressRepository, userRepository } from "../repositories";
import { AppError } from "../errors";

export const alreadyHasAddress = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const idUser = Number(req.params.id);
  const userAddress: any = await userRepository.findOne({
    where: { id: idUser },
    relations: { address: true },
  });
  console.log(userAddress);
  if (userAddress.address) {
    throw new AppError("User already has a address", 404);
  }
  return next();
};
