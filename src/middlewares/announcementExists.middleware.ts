import { NextFunction, Request, Response } from "express";
import { Announcement, User } from "../entities";
import { announcementRepository, userRepository } from "../repositories";
import { AppError } from "../errors";

export const announcementExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.id);

  const foundEntity: Announcement | null =
    await announcementRepository.findOneBy({ id });
  if (!foundEntity) throw new AppError("Announcement not found", 404);

  res.locals = { ...res.locals, foundEntity };

  return next();
};
