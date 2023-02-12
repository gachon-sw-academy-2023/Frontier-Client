import { rest } from "msw";
import { database } from "@/mocks/database";
import { uuidGenerator } from "@/utils/uuidHelper";

const { VITE_API_PREFIX_AUTH } = import.meta.env;

export const ERROR_MESSAGE = {
    LOGIN_USER_NOTFOUND: "존재하지 않는 이메일 입니다.",
    LOGIN_WRONG_PASSWORD: "비밀번호가 일치하지 않습니다.",
    REGISTER_EMAIL_DUPLICATED: "이미 존재하는 이메일입니다.",
};

export const authHandler = [
    rest.post(`${VITE_API_PREFIX_AUTH}/login`, async (req, res, ctx) => {
        const { email, password } = await req.json();

        try {
            const result = await database.user.get({ email });

            if (!result) {
                return await res(
                    ctx.status(404),
                    ctx.json({ message: ERROR_MESSAGE.LOGIN_USER_NOTFOUND }),
                );
            }

            if (result.password !== password) {
                return await res(
                    ctx.status(404),
                    ctx.json({ message: ERROR_MESSAGE.LOGIN_WRONG_PASSWORD }),
                );
            }

            const user = {
                id: result.id,
                name: result.name,
                email: result.email,
                profileImage: result.profileImage,
            };

            return await res(ctx.status(200), ctx.json({ user }));
        } catch (e) {
            return res(ctx.status(500));
        }
    }),
    rest.post(`${VITE_API_PREFIX_AUTH}/register`, async (req, res, ctx) => {
        const { email, password, name } = await req.json();

        try {
            if (await database.user.get({ email })) {
                return await res(
                    ctx.status(409),
                    ctx.json({ message: ERROR_MESSAGE.REGISTER_EMAIL_DUPLICATED }),
                );
            }

            await database.user.add({
                id: uuidGenerator(),
                password,
                email,
                name,
                profileImage: "",
            });

            return await res(ctx.status(201));
        } catch (e) {
            return res(ctx.status(500));
        }
    }),
];
