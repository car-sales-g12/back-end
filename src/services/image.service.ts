import { Announcement, Image } from "../entities";
import { imageRepository } from "../repositories";
import { imageCreateSchema, imageSchema } from "../schemas";
import { ImageCreate } from "../interfaces/image.interfaces";

const create = async (
  payload: ImageCreate,
  announcement: Announcement
): Promise<any> => {
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

// const update = async (payload: UserUpdate, id: number): Promise<UserReturn> => {
//   const userFound: User | null = await userRepository.findOne({
//     where: { id: id },
//   });

//   const userUpdated: User = userRepository.create({
//     ...userFound!,
//     ...payload,
//   });

//   await userRepository.save(userUpdated);

//   const user = userReturnSchema.parse(userUpdated);

//   return user;
// };

// const destroy = async (user: User): Promise<void> => {
//   await userRepository.remove(user);
// };

export default { create, read };
