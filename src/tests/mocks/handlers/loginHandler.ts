import { rest } from "msw";
import users from "@/tests/mocks/datasources/users.json";
import { PostLoginReqBody } from "@/interfaces/userInterface";

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
    rest.post<PostLoginReqBody>("/user", async (req, res, ctx) => {
        await sleep(200);
        const { email, password } = req.body;

        const finded = users.find((user) => {
            return user.email === email && user.password === password;
        });

        if (!finded) {
            return res(ctx.status(401));
        }

        return res(
            ctx.status(200),
            ctx.json({
                id: finded.id,
                name: finded.name,
                email: finded.email,
                password: finded.password,
            }),
        );
    }),
    rest.post("/signup", async (req, res, ctx) => {
        await sleep(200);
        users.push({
            id: "2",
            name: "lee",
            email: "qer@qewr.com",
            password: "1234",
        });

        return res(ctx.status(201), ctx.json(users));
    }),
];
