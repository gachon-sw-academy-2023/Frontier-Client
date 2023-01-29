import { rest } from "msw";
import users from "@/tests/mocks/datasources/users.json";
import { SignUpResponseBody, SignUpRequestBody } from "@/interfaces/signUp.interfaces";

export const signUpHandler = [
    rest.post<SignUpRequestBody, SignUpResponseBody>("/signup", async (req, res, ctx) => {
        const { email } = req.body;
        const finded = users.find((user) => user.email === email);

        if (finded) {
            return res(ctx.status(204));
        }
        return res(ctx.status(200), ctx.json(req.body));
    }),
];
