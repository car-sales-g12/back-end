import { Address, User } from "../entities";
import {
  AddressCreate,
  AddressReturn,
  AddressUpdate,
} from "../interfaces/address.interfaces";
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

const update = async (
  payload: AddressUpdate,

  address: Address
): Promise<AddressReturn> => {
  const addressUpdated: Address = addressRepository.create({
    ...address,
    ...payload,
  });

  await addressRepository.save(addressUpdated);

  return addressSchema.parse(addressUpdated);
};

const destroy = async (address: Address): Promise<void> => {
  await addressRepository.remove(address);
};

export default { create, read, update, destroy };
