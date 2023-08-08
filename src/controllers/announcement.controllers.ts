import { Request, Response } from "express";
import { announcementService } from "../services";
import {
  AnnouncementReturnCreate,
  AnnouncementReturnRead,
  Pagination,
} from "../interfaces";
import { Announcement, User } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: User = res.locals.foundEntity;
  const announcement: AnnouncementReturnCreate =
    await announcementService.create(req.body, user);
  return res.status(201).json(announcement);
};

const readById = async (req: Request, res: Response): Promise<Response> => {
  const announcementId: number = Number(req.params.idAnnouncement);
  const announcement: AnnouncementReturnRead =
    await announcementService.readById(announcementId);
  return res.status(200).json(announcement);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const pagination: Pagination = await announcementService.readAll(
    res.locals.pagination
  );
  return res.status(200).json(pagination);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const id: number = Number(req.params.idAnnouncement);
  const announcement: Announcement = await announcementService.update(
    req.body,
    id
  );
  return res.status(200).json(announcement);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await announcementService.destroy(res.locals.foundAnnouncement);
  return res.status(204).json();
};

export default { create, readById, read, update, destroy };
