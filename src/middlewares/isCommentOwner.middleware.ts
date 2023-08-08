import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const isCommentOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const idUser = Number(res.locals.decoded.sub);

  const comment = res.locals.foundComment;
  if (!comment) {
    throw new AppError("Comment not found.", 404);
  }
  if (comment.user.id !== idUser) {
    throw new AppError("Insufficient permissions", 403);
  }

  return next();
};
