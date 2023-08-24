import { Announcement } from "../entities";
import { AnnouncementReturnRead } from "./announcement.interfaces";

interface Pagination {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: Array<AnnouncementReturnRead>;
}

interface PaginationParams {
  page: number;
  perPage: number;
  order: string;
  sort: string;
  prevPage: string | null;
  nextPage: string | null;
}

export { Pagination, PaginationParams };
