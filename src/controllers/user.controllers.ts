import { Request, Response } from "express";
import { userService } from "../services";
import { UserReturn } from "../interfaces";
import { emailUser, passwordUser } from "../interfaces/resetPassword.interface";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturn = await userService.create(req.body);
  return res.status(201).json(user);
};

const perfilPatch = async (req: Request, res: Response): Promise<Response> => {
  const userEntity = res.locals.foundEntity;
  const img: string = req.body.perfilImg;
  const user: UserReturn = await userService.patchImg(userEntity, img);
  return res.status(201).json(user);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const userId: number = Number(req.params.id);
  const user = await userService.read(userId);
  return res.status(200).json(user);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const id: number = Number(req.params.id);
  const user: UserReturn = await userService.update(req.body, id);
  return res.status(200).json(user);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await userService.destroy(res.locals.foundEntity);
  return res.status(204).json();
};

const sendResetEmailPassword = async (req: Request, res: Response) => {
  const { email }: emailUser = req.body;
  await userService.sendResetEmailPassword(email);

  return res.json({
    message: `token send`,
  });
};

const resetPassword = async (req: Request, res: Response) => {
  const { password }: passwordUser = req.body;
  const { token } = req.params;

  await userService.resetPassword(password, token);

  res.json({ message: "password change with sucess" });
};

export default {
  create,
  read,
  update,
  destroy,
  perfilPatch,
  sendResetEmailPassword,
  resetPassword,
};
