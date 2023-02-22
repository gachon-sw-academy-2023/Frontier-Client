import { setupWorker, rest, SetupWorkerApi } from "msw";
import { handlers } from "@/mocks/handlers";

export const worker = setupWorker(...handlers);

declare global {
    interface Window {
        msw: {
            worker: SetupWorkerApi;
            rest: typeof rest;
        };
        Cypress: object;
        appReady: boolean;
    }
}

window.msw = {
    worker,
    rest,
};
