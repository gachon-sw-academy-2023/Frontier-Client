import { loginHandler } from "@/tests/mocks/handlers/loginHandler";
import { signUpHandler } from "@/tests/mocks/handlers/signUpHandler";
import { workspaceHandler } from "@/tests/mocks/handlers/workspaceHanlder";

export const handlers = [...loginHandler, ...signUpHandler, ...workspaceHandler];
