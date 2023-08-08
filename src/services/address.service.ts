import { User } from "../entities";
import { AddressCreate, AddressReturn } from "../interfaces/address.interfaces";
import { addressRepository } from "../repositories";
import { addressSchema } from "../schemas";

const create = async (
  payload: AddressCreate,
  user: User
): Promise<AddressReturn> => {
  const address = addressRepository.create({ ...payload, user });
  await addressRepository.save(address);
  return addressSchema.parse(address);
};

const read = async (userId: number): Promise<any> => {
  const address = await addressRepository.findOne({
    where: { user: { id: userId } },
  });
  return address;
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
