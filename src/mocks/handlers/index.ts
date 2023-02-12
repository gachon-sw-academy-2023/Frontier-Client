import { userHandler } from "@/mocks/handlers/userHandler";
import { authHandler } from "@/mocks/handlers/authHandler";
import { workspaceHandler } from "@/mocks/handlers/workspaceHandler";

export const handlers = [...userHandler, ...authHandler, ...workspaceHandler];
