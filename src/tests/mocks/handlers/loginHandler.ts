import { rest } from "msw";
import users from "@/tests/mocks/datasources/users.json";
import { LoginRequestBody, LoginResponseBody } from "@/interfaces/login.interfaces";

export const loginHandler = [
    rest.post<LoginRequestBody, LoginResponseBody>("/login", async (req, res, ctx) => {
        const { email, password } = await req.json();

        const user = users.find((v) => v.email === email && v.password === password);

        if (!user) {
            return res(ctx.status(401));
        }

        return res(
            ctx.status(200),
            ctx.json({
                id: user.id,
                name: user.name,
            }),
        );
    }),
];
