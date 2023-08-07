import { Comment } from "./../entities/comment.entity";
import { Request, Response } from "express";
import { commentService, userService } from "../services";
import { Announcement, User } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: User = res.locals.foundEntity;
  const announcement: Announcement = res.locals.foundAnnouncement;
  const comment: Comment = await commentService.create(
    req.body,
    user,
    announcement
  );
  return res.status(201).json(comment);
};

// const read = async (req: Request, res: Response): Promise<Response> => {
//   const userId: number = Number(req.params.id);
//   const user = await userService.read(userId);
//   return res.status(200).json(user);
// };

// const update = async (req: Request, res: Response): Promise<Response> => {
//   const id: number = Number(req.params.id);
//   const user: UserReturn = await userService.update(req.body, id);
//   return res.status(200).json(user);
// };

// const destroy = async (req: Request, res: Response): Promise<Response> => {
//   await userService.destroy(res.locals.foundEntity);
//   return res.status(204).json();
// };

export default { create };
