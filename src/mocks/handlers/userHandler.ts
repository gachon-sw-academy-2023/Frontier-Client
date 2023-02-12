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
            const result = await database.user.toArray();

            if (!result) {
                return await res(
                    ctx.status(404),
                    ctx.json({ message: ERROR_MESSAGE.USER_NOTFOUND }),
                );
            }

            const user = result.map(({ id, name, email, profileImage }) => ({
                id,
                name,
                email,
                profileImage,
            }));

            return await res(ctx.status(200), ctx.json({ user }));
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
            const result = await database.user.get({ id: userId });

            if (!result) {
                return await res(
                    ctx.status(404),
                    ctx.json({ message: ERROR_MESSAGE.USER_NOTFOUND }),
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

            return await res(ctx.status(200));
        } catch (e) {
            return res(ctx.status(500));
        }
    }),
];
