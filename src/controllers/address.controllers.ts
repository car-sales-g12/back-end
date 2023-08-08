import { Request, Response } from "express";
import { Address, User } from "../entities";
import { addressService } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: User = res.locals.foundEntity;
  const address = await addressService.create(req.body, user);
  return res.status(201).json(address);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const userId: number = Number(req.params.id);
  const address: Address = await addressService.read(userId);
  return res.status(200).json(address);
};

// const update = async (req: Request, res: Response): Promise<Response> => {
//   const id: number = Number(req.params.id);
//   const user: UserReturn = await userService.update(req.body, id);
//   return res.status(200).json(user);
// };

// const destroy = async (req: Request, res: Response): Promise<Response> => {
//   await userService.destroy(res.locals.foundEntity);
//   return res.status(204).json();
// };

export default { create, read };
