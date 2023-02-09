import { loginHandler } from "@/tests/mocks/handlers/loginHandler";
import { signUpHandler } from "@/tests/mocks/handlers/signUpHandler";
import { boardHandler } from "@/tests/mocks/handlers/boardHanlder";

export const handlers = [...loginHandler, ...signUpHandler, ...boardHandler];
