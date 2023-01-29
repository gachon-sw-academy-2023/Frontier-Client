import { rest } from "msw";
import { sleep } from "@/utils/sleep";
import users from "@/tests/mocks/datasources/users.json";
import { PostLoginReqBody, PostSignUpReqBody } from "@/interfaces/userInterface";

export const loginHandler = [
    rest.post<PostLoginReqBody>("/user", async (req, res, ctx) => {
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
