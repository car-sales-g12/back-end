import { z } from "zod";
import { userCreateSchema, userReturnSchema, userSchema } from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities";

type UserCreate = z.infer<typeof userCreateSchema>;
type userReturn = z.infer<typeof userReturnSchema>;
type UserUpdate = DeepPartial<User>;

type UserRepo = Repository<User>;

export { UserCreate, UserUpdate, userReturn, UserRepo };
