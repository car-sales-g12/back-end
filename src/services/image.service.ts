import { Image } from "../entities";
import { imageRepository } from "../repositories";
import { imageSchema } from "../schemas";
import { ImageCreate } from "../interfaces/image.interfaces";

const create = async (payload: ImageCreate): Promise<any> => {
  const image: Image = imageRepository.create(payload);
  await imageRepository.save(image);
  return imageSchema.parse(image);
};

// const read = async (userId: number): Promise<UserReturnWithAddress> => {
//   const user = await userRepository.findOne({
//     where: { id: userId },
//     relations: { addresses: true },
//   });
//   return userReturnWithAddressSchema.parse(user);
// };

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

export default { create };
