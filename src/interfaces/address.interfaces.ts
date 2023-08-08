import { z } from "zod";
import { addressCreateSchema, addressSchema } from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { Address } from "../entities";

type AddressCreate = z.infer<typeof addressCreateSchema>;
type AddressReturn = z.infer<typeof addressSchema>;
type AddressUpdate = DeepPartial<Address>;
type AddressRepo = Repository<Address>;

export { AddressCreate, AddressReturn, AddressUpdate, AddressRepo };
