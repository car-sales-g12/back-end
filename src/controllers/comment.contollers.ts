import { Comment } from "./../entities/comment.entity";
import { Request, Response } from "express";
import { commentService } from "../services";
import { Announcement, User } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: User = res.locals.foundEntity;
  const announcement: Announcement = res.locals.foundAnnouncement;

  const comment = await commentService.create(req.body, user, announcement);

  return res.status(201).json(comment);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const idAnnouncement: number = Number(req.params.idAnnouncement);
  const comments = await commentService.read(idAnnouncement);
  return res.status(200).json(comments);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const foundComment: Comment = res.locals.foundComment;
  const comment = await commentService.update(req.body, foundComment);
  return res.status(200).json(comment);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await commentService.destroy(res.locals.foundComment);
  return res.status(204).json();
};

export default { create, read, update, destroy };
