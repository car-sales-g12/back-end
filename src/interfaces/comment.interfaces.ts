import { z } from "zod";
import { commentCreateSchema, commentReturnSchema } from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities";

type CommentCreate = z.infer<typeof commentCreateSchema>;
type CommentReturn = z.infer<typeof commentReturnSchema>;
type CommentUpdate = DeepPartial<Comment>;
type CommentRepo = Repository<User>;

export { CommentCreate, CommentRepo, CommentUpdate,CommentReturn };
