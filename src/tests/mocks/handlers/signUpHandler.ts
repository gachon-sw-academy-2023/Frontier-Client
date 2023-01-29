import { rest } from "msw";
import { sleep } from "@/utils/sleep";
import users from "@/tests/mocks/datasources/users.json";
import { PostSignUpReqBody } from "@/interfaces/userInterface";

export const signUpHandler = [
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
