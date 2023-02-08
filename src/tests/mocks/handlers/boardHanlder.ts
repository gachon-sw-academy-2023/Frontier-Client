import { rest } from "msw";
import workspaceData from "@/tests/mocks/datasources/workspace.json";
import boardData1 from "@/tests/mocks/datasources/boardData1.json";
import boardData2 from "@/tests/mocks/datasources/boardData2.json";

export const boardHandler = [
    rest.get("/workspaces", async (req, res, ctx) =>
        res(ctx.status(200), ctx.delay(1000), ctx.json(workspaceData)),
    ),
    rest.get("/boards/one", async (req, res, ctx) =>
        res(ctx.status(200), ctx.delay(1000), ctx.json(boardData1)),
    ),
    rest.get("/boards/two", async (req, res, ctx) =>
        res(ctx.status(200), ctx.delay(1000), ctx.json(boardData2)),
    ),
];
