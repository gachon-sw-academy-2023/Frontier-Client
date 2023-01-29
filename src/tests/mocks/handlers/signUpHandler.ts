import { rest } from "msw";
import users from "@/tests/mocks/datasources/users.json";
import { SignUpResponseBody, SignUpRequestBody } from "@/interfaces/signUp.interfaces";

export const signUpHandler = [
    rest.post<SignUpRequestBody, SignUpResponseBody>("/signup", async (req, res, ctx) => {
        const { name, email, password } = await req.json();

        const user = users.find((v) => v.email === email);

        if (user) {
            return res(ctx.status(204));
        }

        users.push({
            id: "4",
            name,
            email,
            password,
        });

        return res(
            ctx.status(200),
            ctx.json({
                id: "4",
                name,
            }),
        );
    }),
];
