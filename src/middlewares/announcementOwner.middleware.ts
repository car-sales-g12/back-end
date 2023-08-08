import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const isAnnouncementOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const idUser = Number(res.locals.decoded.sub);

  const annoncement = res.locals.foundAnnouncement;
  if (!annoncement) {
    throw new AppError("Announcement not found.", 404);
  }
  if (annoncement.user.id !== idUser) {
    throw new AppError("Insufficient permissions", 403);
  }

  return next();
};
