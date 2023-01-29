import { rest } from "msw";
import users from "@/tests/mocks/datasources/users.json";
import { UserSignUp, User } from "@/interfaces/userInterface";

export const signUpHandler = [
    rest.post("/signup", async (req, res, ctx) => {
        const { name, email, password } = await req.json<UserSignUp>();

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
            ctx.json<User>({
                id: "4",
                name,
            }),
        );
    }),
];
