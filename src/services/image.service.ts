import { Announcement, Image } from "../entities";
import { imageRepository } from "../repositories";
import { imageSchema } from "../schemas";
import { ImageCreate, ImageInterface } from "../interfaces/image.interfaces";

const create = async (
  payload: ImageCreate,
  announcement: Announcement
): Promise<ImageInterface> => {
  const image: Image = imageRepository.create({ ...payload, announcement });
  await imageRepository.save(image);
  return imageSchema.parse(image);
};

const read = async (idAnnouncement: number): Promise<Image[]> => {
  const images = await imageRepository.find({
    where: { announcement: { id: idAnnouncement } },
  });
  console.log();
  return images;
};

const destroy = async (image: Image): Promise<void> => {
  await imageRepository.remove(image);
};

export default { create, read, destroy };
