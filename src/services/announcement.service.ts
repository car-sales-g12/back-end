import { announcementRouter } from "./../routers/announcements.router";
import {
  AnnouncementCreate,
  AnnouncementReturnCreate,
  AnnouncementReturnRead,
  AnnouncementUpdate,
} from "../interfaces";
import { User } from "../entities";
import { Announcement } from "../entities";

import { announcementRepository } from "../repositories";
import { userRepository } from "../repositories";
import {
  announcementReturnCreateSchema,
  announcementReturnReadSchema,
  announcementSchema,
  userReturnSchema,
  userReturnWithAddressSchema,
} from "../schemas";
import { number } from "zod";
import { response } from "express";

const create = async (
  payload: AnnouncementCreate,
  user: User
): Promise<AnnouncementReturnCreate> => {
  const announcement: Announcement = announcementRepository.create({
    ...payload,
    user,
  });
  await announcementRepository.save(announcement);
  return announcementReturnCreateSchema.parse(announcement);
};

const readById = async (id: number): Promise<AnnouncementReturnRead> => {
  const announcement = (await announcementRepository.findOne({
    where: { id: id },
    relations: {
      user: true,
    },
  }))!;
  return announcementReturnReadSchema.parse(announcement);
};

const readAll = async (): Promise<any> => {
  const announcement = await announcementRepository.find({});
  return announcement;
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

export default { create, readById, readAll };
