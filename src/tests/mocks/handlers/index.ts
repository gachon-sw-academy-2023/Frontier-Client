import { loginHandler } from "@/tests/mocks/handlers/loginHandler";
import { signUpHandler } from "@/tests/mocks/handlers/signUpHandler";

export const handlers = [...loginHandler, ...signUpHandler];
