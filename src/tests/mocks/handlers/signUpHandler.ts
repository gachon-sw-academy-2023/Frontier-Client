import { rest } from "msw";
import users from "@/tests/mocks/datasources/users.json";
import { UserSignUp, User } from "@/interfaces/userInterface";
import { uuidGenerator } from "@/utils/uuidHelper";

export const ERROR_MESSAGE = {
    EMAIL_DUPLICATED: "이미 존재하는 이메일입니다.",
};

export const signUpHandler = [
    rest.post("/auth/signup", async (req, res, ctx) => {
        const { name, email, password } = await req.json<UserSignUp>();
        const user = users.find((v) => v.email === email);

        if (user) {
            return res(
                ctx.status(409),
                ctx.json({
                    message: ERROR_MESSAGE.EMAIL_DUPLICATED,
                }),
            );
        }

        const userId = uuidGenerator();

        users.push({
            id: userId,
            name,
            email,
            password,
        });

        return res(
            ctx.status(200),
            ctx.json<User>({
                id: userId,
                name,
            }),
        );
    }),
];
