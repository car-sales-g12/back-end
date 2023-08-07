import { announcementExists } from "./announcementExists.middleware";
import { handleError } from "./handleError.middleware";
import { isOwner } from "./isOwner.middleware";
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
};
