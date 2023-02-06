import { rest } from "msw";
import users from "@/tests/mocks/datasources/users.json";
import { UserLogin, User } from "@/interfaces/userInterface";

const ERROR_MESSAGE = {
    USER_NOTFOUND: "존재하지 않는 이메일 입니다.",
    WRONG_PASSWORD: "비밀번호가 일치하지 않습니다.",
};

export const loginHandler = [
    rest.post("/auth/login", async (req, res, ctx) => {
        const { email, password } = await req.json<UserLogin>();

        const user = users.find((v) => v.email === email);

        if (!user) {
            return res(
                ctx.status(404),
                ctx.json({
                    message: ERROR_MESSAGE.USER_NOTFOUND,
                }),
            );
        }

        if (user && user.password !== password) {
            return res(
                ctx.status(404),
                ctx.json({
                    message: ERROR_MESSAGE.WRONG_PASSWORD,
                }),
            );
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
