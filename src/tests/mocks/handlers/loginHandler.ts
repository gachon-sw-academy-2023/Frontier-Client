import { rest } from "msw";
import users from "@/tests/mocks/datasources/users.json";
import { LoginRequestBody, LoginResponseBody } from "@/interfaces/login.interfaces";

export const loginHandler = [
    rest.post<LoginRequestBody, LoginResponseBody>("/login", async (req, res, ctx) => {
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
            }),
        );
    }),
];
