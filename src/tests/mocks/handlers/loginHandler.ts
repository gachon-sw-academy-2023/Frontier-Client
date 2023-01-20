import { rest } from "msw";
import users from "@/tests/mocks/datasources/users.json";
import { PostLoginReqBody, PostSignUpReqBody } from "@/interfaces/userInterface";

async function sleep(timeout: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}

export const loginHandler = [
    rest.post<PostLoginReqBody>("/user", async (req, res, ctx) => {
        await sleep(1000);
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
    rest.post<PostSignUpReqBody>("/signup", async (req, res, ctx) => {
        await sleep(200);
        const { email } = req.body;
        const finded = users.find((user) => {
            return user.email === email;
        });

        if (finded) {
            return res(ctx.status(204));
        }
        return res(ctx.status(200), ctx.json(req.body));
    }),
];
