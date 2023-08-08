import { z } from "zod";
import { imageCreateSchema, imageSchema } from "../schemas";
import { Repository } from "typeorm";
import { Image } from "../entities";

type ImageCreate = z.infer<typeof imageCreateSchema>;
type ImageInterface = z.infer<typeof imageSchema>;
type ImageRepo = Repository<Image>;

export { ImageCreate, ImageRepo, ImageInterface };
