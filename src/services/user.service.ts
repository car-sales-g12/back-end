import {
  UserCreate,
  UserUpdate,
  UserReturn,
  UserReturnWithAddress,
} from "../interfaces";
import { User } from "../entities";
import { userRepository } from "../repositories";
import { userReturnSchema, userReturnWithAddressSchema } from "../schemas";

const create = async (payload: UserCreate): Promise<UserReturn> => {
  const user: User = userRepository.create(payload);
  user.perfilImg =
    "https://media.istockphoto.com/id/1142192548/pt/vetorial/man-avatar-profile-male-face-silhouette-or-icon-isolated-on-white-background-vector.jpg?s=612x612&w=0&k=20&c=jM0A3ijNgtNtX3HANg6w9v0gttMeFriuA7ms_890hhc=";
  await userRepository.save(user);
  return userReturnSchema.parse(user);
};

const patchImg = async (user: User, img: string): Promise<UserReturn> => {
  user.perfilImg = img;
  await userRepository.save(user);
  return userReturnSchema.parse(user);
};

const read = async (userId: number): Promise<UserReturnWithAddress> => {
  const user = await userRepository.findOne({
    where: { id: userId },
    relations: { addresses: true },
  });
  return userReturnWithAddressSchema.parse(user);
};

const update = async (payload: UserUpdate, id: number): Promise<UserReturn> => {
  const userFound: User | null = await userRepository.findOne({
    where: { id: id },
  });

  const userUpdated: User = userRepository.create({
    ...userFound!,
    ...payload,
  });

  await userRepository.save(userUpdated);

  const user = userReturnSchema.parse(userUpdated);

  return user;
};

const destroy = async (user: User): Promise<void> => {
  await userRepository.remove(user);
};

export default { create, read, update, destroy, patchImg };
