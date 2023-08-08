import { NextFunction, Request, Response } from "express";
import { Image } from "../entities";
import { imageRepository } from "../repositories";
import { AppError } from "../errors";

export const imageExistsAndIsOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const idImage: number = Number(req.params.idImage);
  const { sub } = res.locals.decoded;

  const foundImage: Image | null = await imageRepository
    .createQueryBuilder("image")
    .leftJoinAndSelect("image.announcement", "announcement")
    .leftJoinAndSelect("announcement.user", "user")
    .where("image.id = :id", { id: idImage })
    .getOne();

  if (!foundImage) throw new AppError("Image not found", 404);
  if (Number(sub) != Number(foundImage.announcement.user.id)) {
    throw new AppError("Insufficient permissions", 403);
  }
  res.locals = { ...res.locals, foundImage };

  return next();
};
