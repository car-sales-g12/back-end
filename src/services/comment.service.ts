import {
  CommentArrayReturn,
  CommentCreate,
  CommentReturn,
  CommentUpdate,
} from "../interfaces";
import { Announcement, Comment, User } from "../entities";
import { commentRepository } from "../repositories";
import { commentReturnArraySchema, commentReturnSchema } from "../schemas";

const create = async (
  payload: CommentCreate,
  user: User,
  announcement: Announcement
): Promise<CommentReturn> => {
  const comment: Comment = commentRepository.create({
    ...payload,
    user,
    announcement,
  });
  await commentRepository.save(comment);
  return commentReturnSchema.parse(comment);
};

const read = async (idAnnouncement: number): Promise<CommentArrayReturn> => {
  const comments = await commentRepository.find({
    where: { announcement: { id: idAnnouncement } },
    relations: { user: true },
  });
  return commentReturnArraySchema.parse(comments);
};

const update = async (
  payload: CommentUpdate,
  foundComment: Comment
): Promise<CommentReturn> => {
  const commentUpdated = commentRepository.create({
    ...foundComment,
    ...payload,
  });

  await commentRepository.save(commentUpdated);

  return commentReturnSchema.parse(commentUpdated);
};

const destroy = async (comment: Comment): Promise<void> => {
  await commentRepository.remove(comment);
};

export default { create, read, update, destroy };
