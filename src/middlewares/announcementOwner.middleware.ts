import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { announcementRepository } from "../repositories";

export const isAnnouncementOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const idUser = Number(res.locals.decoded.sub);
  const idAnnoncement = Number(req.params.id);

  const annoncement = await announcementRepository.findOne({
    where: { id: idAnnoncement },
    relations: { user: true },
  });
  if (!annoncement) {
    throw new AppError("Announcement not found.", 404);
  }
  if (annoncement.user.id !== idUser) {
    throw new AppError("Insufficient permissions", 403);
  }

  return next();
};
