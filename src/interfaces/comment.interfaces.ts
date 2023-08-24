import { z } from "zod";
import { commentCreateSchema, commentReturnArraySchema, commentReturnSchema } from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities";

type CommentCreate = z.infer<typeof commentCreateSchema>;
type CommentReturn = z.infer<typeof commentReturnSchema>;
type CommentArrayReturn = z.infer<typeof commentReturnArraySchema>;
type CommentUpdate = DeepPartial<Comment>;
type CommentRepo = Repository<User>;

export { CommentCreate, CommentRepo, CommentUpdate,CommentReturn,CommentArrayReturn };
