import { z } from "zod";
import { imageCreateSchema } from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { Image } from "../entities";

type ImageCreate = z.infer<typeof imageCreateSchema>;
type ImageUpdate = DeepPartial<Image>;
type ImageRepo = Repository<Image>;

export { ImageCreate, ImageRepo, ImageUpdate };
