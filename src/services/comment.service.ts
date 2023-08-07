import { CommentCreate, CommentReturn } from "../interfaces";
import { Announcement, Comment, User } from "../entities";

import { commentRepository } from "../repositories";
import { commentReturnSchema, commentSchema } from "../schemas";

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

const read = async (idAnnouncement: number): Promise<Comment[]> => {
  const comments = await commentRepository.find({
    where: { announcement: { id: idAnnouncement } },
  });
  return comments;
};

// const update = async (
//   payload: commentUpdate,
//   id: number
// ): Promise<commentReturn> => {
//   const commentFound: comment | null = await commentRepository.findOne({
//     where: { id: id },
//   });

//   const commentUpdated: comment = commentRepository.create({
//     ...commentFound!,
//     ...payload,
//   });

//   await commentRepository.save(commentUpdated);

//   const comment = commentReturnSchema.parse(commentUpdated);

//   return comment;
// };

// const destroy = async (comment: comment): Promise<void> => {
//   await commentRepository.remove(comment);
// };

export default { create, read };
