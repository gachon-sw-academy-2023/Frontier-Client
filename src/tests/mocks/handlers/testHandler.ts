import { rest } from "msw";

const exampleData = "data";

export const testHandler = [
    rest.get(`/data`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(exampleData));
    }),
];
