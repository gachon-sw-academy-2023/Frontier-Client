import { rest } from "msw";
import workspace from "@/tests/mocks/datasources/workspace.json";
import { WorkspaceInterface } from "@/interfaces/workspaceInterface";

export const workspaceHandler = [
    rest.get('/workspaces', async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.delay(1000),
            ctx.json(workspace)
        );
    }),
];