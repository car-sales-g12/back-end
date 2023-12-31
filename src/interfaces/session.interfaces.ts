import { z } from "zod";
import { sessionSchema } from "../schemas";

type SessionCreate = z.infer<typeof sessionSchema>;
type SessionReturn = { token: string; user_id: number; is_seller: boolean };

export { SessionCreate, SessionReturn };
