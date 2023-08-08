import { NextFunction, Request, Response } from "express";
import { commentRepository } from "../repositories";
import { AppError } from "../errors";
import { Comment } from "../entities";

export const commentExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const idComment: number = Number(req.params.idComment);

  const foundComment: Comment | null = await commentRepository.findOne({
    where: { id: idComment },
    relations: { user: true, announcement: true },
  });
  if (!foundComment) throw new AppError("Comment not found", 404);

  res.locals = { ...res.locals, foundComment };

  return next();
};
