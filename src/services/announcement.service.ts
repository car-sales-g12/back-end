import {
  AnnouncementCreate,
  AnnouncementReturnCreate,
  AnnouncementReturnRead,
  AnnouncementUpdate,
  Pagination,
  PaginationParams,
} from "../interfaces";
import { User } from "../entities";
import { Announcement } from "../entities";

import { announcementRepository } from "../repositories";

import {
  announcementReturnCreateSchema,
  announcementReturnReadSchema,
} from "../schemas";
import { arrayAnnouncementReturnWithUser } from "../schemas/announcement.schemas";

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

const listByUser = async (
  userId: number
): Promise<AnnouncementReturnRead[]> => {
  try {
    const announcements: AnnouncementReturnRead[] =
      await announcementRepository.find({
        where: { user: { id: userId } },
        relations: ["user"],
      });
    return announcements;
  } catch (error) {
    throw new Error("An error occurred while fetching announcements.");
  }
};

const readAll = async ({
  page,
  perPage,
  order,
  sort,
  prevPage,
  nextPage,
}: PaginationParams): Promise<Pagination> => {
  const [products, count]: [Announcement[], number] =
    await announcementRepository.findAndCount({
      order: { [sort]: order },
      skip: page,
      take: perPage,
      relations: { user: true },
    });
  const parsedProducts = arrayAnnouncementReturnWithUser.parse(products);
  return {
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage,
    count,
    data: parsedProducts,
  };
};

const update = async (
  payload: AnnouncementUpdate,
  id: number
): Promise<any> => {
  const announcementFound: Announcement | null =
    await announcementRepository.findOne({
      where: { id: id },
    });

  const announcementUpdated: Announcement = announcementRepository.create({
    ...announcementFound,
    ...payload,
  });

  await announcementRepository.save(announcementUpdated);

  return announcementUpdated;
};

const destroy = async (announcement: Announcement): Promise<void> => {
  await announcementRepository.remove(announcement);
};

export default { create, readById, readAll, update, destroy, listByUser };
