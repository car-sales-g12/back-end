import { NextFunction, Request, Response } from "express";
import { Announcement } from "../entities";
import { announcementRepository } from "../repositories";
import { AppError } from "../errors";

export const announcementExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const idAnnouncement: number = Number(req.params.idAnnouncement);

  const foundAnnouncement: Announcement | null =
    await announcementRepository.findOne({
      where: { id: idAnnouncement },
      relations: { user: true },
    });
  if (!foundAnnouncement) throw new AppError("Announcement not found", 404);

  res.locals = { ...res.locals, foundAnnouncement };

  return next();
};
