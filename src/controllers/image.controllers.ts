import { Request, Response } from "express";
import { imageService } from "../services";
import { Announcement, Image } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
  const announcemente: Announcement = res.locals.foundAnnouncement;
  const image: Image = await imageService.create(req.body, announcemente);
  return res.status(201).json(image);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const idAnnouncement: number = Number(req.params.idAnnouncement);
  const images = await imageService.read(idAnnouncement);
  return res.status(200).json(images);
};

// const update = async (req: Request, res: Response): Promise<Response> => {
//   const id: number = Number(req.params.id);
//   const user: UserReturn = await userService.update(req.body, id);
//   return res.status(200).json(user);
// };

// const destroy = async (req: Request, res: Response): Promise<Response> => {
//   await userService.destroy(res.locals.foundEntity);
//   return res.status(204).json();
// };

export default { create, read };
