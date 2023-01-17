import { rest } from "msw";
import user from "@/tests/mocks/datasources/users.json";

async function sleep(timeout: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}

export const loginHandler = [
    // msw 테스트 API
    rest.get("/test", async (req, res, ctx) => {
        await sleep(200);
        return res(
            ctx.status(200),
            ctx.json({
                message: "msw 모킹 테스트",
            }),
        );
    }),
    rest.post("/user", async (req, res, ctx) => {
        await sleep(200);
        return res(
            ctx.status(200),
            ctx.json([
                {
                    userId: 1,
                    userName: "kim",
                    userEmail: "123@123.com",
                    userPassword: "123123",
                },
            ]),
        );
    }),
    rest.post("/signup", async (req, res, ctx) => {
        await sleep(200);
        user.push({
            id: "2",
            name: "lee",
            email: "qer@qewr.com",
            password: "1234",
        });

        return res(ctx.status(201), ctx.json(user));
    }),
];
