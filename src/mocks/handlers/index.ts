import { userHandler } from "@/mocks/handlers/userHandler";
import { authHandler } from "@/mocks/handlers/authHandler";

export const handlers = [...userHandler, ...authHandler];
