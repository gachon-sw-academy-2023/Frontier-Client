import { rest } from "msw";
import { database } from "@/mocks/database";

const { VITE_API_PREFIX_USER } = import.meta.env;

const ERROR_MESSAGE = {
    USER_NOTFOUND: "존재하지 않는 사용자 입니다.",
};

export const userHandler = [
    rest.get(`${VITE_API_PREFIX_USER}`, async (req, res, ctx) => {
        const auth = req.headers.get("Authorization");
        if (!auth) {
            return res(ctx.status(401));
        }

        try {
            const user = await database.user.toArray();

            if (!user) {
                return await res(
                    ctx.status(404),
                    ctx.json({ message: ERROR_MESSAGE.USER_NOTFOUND }),
                );
            }

            const result = user.map(({ id, name, email, profileImage }) => ({
                id,
                name,
                email,
                profileImage,
            }));

            return await res(ctx.status(200), ctx.json(result));
        } catch (e) {
            return res(ctx.status(500));
        }
    }),
    rest.get(`${VITE_API_PREFIX_USER}/:userId`, async (req, res, ctx) => {
        const auth = req.headers.get("Authorization");
        if (!auth) {
            return res(ctx.status(401));
        }

        const { userId } = req.params;
        try {
            const user = await database.user.get({ id: userId });

            if (!user) {
                return await res(
                    ctx.status(404),
                    ctx.json({ message: ERROR_MESSAGE.USER_NOTFOUND }),
                );
            }

            const result = {
                id: user.id,
                name: user.name,
                email: user.email,
                profileImage: user.profileImage,
            };

            return await res(ctx.status(200), ctx.json(result));
        } catch (e) {
            return res(ctx.status(500));
        }
    }),
    rest.put(`${VITE_API_PREFIX_USER}/:userId`, async (req, res, ctx) => {
        const auth = req.headers.get("Authorization");
        if (!auth) {
            return res(ctx.status(401));
        }

        const { userId } = req.params;
        if (auth !== userId) {
            return res(ctx.status(403));
        }

        try {
            const { profileImage } = await req.json();

            await database.user.where("id").equals(userId).modify({ profileImage });

            return await res(ctx.status(201));
        } catch (e) {
            return res(ctx.status(500));
        }
    }),
];
