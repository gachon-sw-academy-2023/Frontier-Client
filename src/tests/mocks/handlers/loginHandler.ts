import { rest } from "msw";
import users from "@/tests/mocks/datasources/users.json";
import { UserLogin, User } from "@/interfaces/userInterface";

export const loginHandler = [
    rest.post("/login", async (req, res, ctx) => {
        const { email, password } = await req.json<UserLogin>();

        const user = users.find((v) => v.email === email && v.password === password);

        if (!user) {
            return res(ctx.status(401));
        }

        return res(
            ctx.status(200),
            ctx.json<User>({
                id: user.id,
                name: user.name,
            }),
        );
    }),
];
