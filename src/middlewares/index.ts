import { handleError } from "./handleError.middleware";
import { uniqueCpf } from "./uniqueCpf.middleware";
import { uniqueEmail } from "./uniqueEmail.middleware";
import { validateBody } from "./validadeBody.middleware";
export default { handleError, uniqueEmail, validateBody, uniqueCpf };
