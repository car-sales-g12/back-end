import { Request, Response } from "express";
import { imageService } from "../services";
import { Announcement } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
  const announcement: Announcement = res.locals.foundAnnouncement;
  const image = await imageService.create(req.body, announcement);
  return res.status(201).json(image);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const idAnnouncement: number = Number(req.params.idAnnouncement);
  const images = await imageService.read(idAnnouncement);
  return res.status(200).json(images);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await imageService.destroy(res.locals.foundImage);
  return res.status(204).json();
};

export default { create, read, destroy };
