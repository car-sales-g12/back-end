import { Request, Response } from "express";
import { announcementService, userService } from "../services";
import { AnnouncementReturn, UserReturn } from "../interfaces";
import { User } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: User = res.locals.foundEntity;
  const announcement: AnnouncementReturn = await announcementService.create(
    req.body,
    user
  );
  return res.status(201).json(announcement);
};

const readById = async (req: Request, res: Response): Promise<Response> => {
  const announcementId: number = Number(req.params.id);
  const announcement = await announcementService.readById(announcementId);
  return res.status(200).json(announcement);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const id: number = Number(req.params.id);
  const user: UserReturn = await userService.update(req.body, id);
  return res.status(200).json(user);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await userService.destroy(res.locals.foundEntity);
  return res.status(204).json();
};

export default { create, readById };
