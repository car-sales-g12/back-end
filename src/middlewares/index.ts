import { announcementExists } from "./announcementExists.middleware";
import { isAnnouncementOwner } from "./announcementOwner.middleware";
import { commentExists } from "./commentExist.middleware";
import { handleError } from "./handleError.middleware";
import { isCommentOwner } from "./isCommentOwner.middleware";
import { isOwner } from "./isOwner.middleware";
import { pagination } from "./pagination.middleware";
import { uniqueCpf } from "./uniqueCpf.middleware";
import { uniqueEmail } from "./uniqueEmail.middleware";
import { userExists } from "./userExists.middleware";
import { validateBody } from "./validadeBody.middleware";
import { verifyToken } from "./verifyToken.middleware";

export default {
  handleError,
  uniqueEmail,
  validateBody,
  uniqueCpf,
  isOwner,
  userExists,
  verifyToken,
  announcementExists,
  pagination,
  isAnnouncementOwner,
  commentExists,
  isCommentOwner,
};
