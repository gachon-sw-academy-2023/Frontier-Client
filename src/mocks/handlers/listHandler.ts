import { rest } from "msw";
import { database } from "@/mocks/database";
import { uuidGenerator } from "@/utils/uuidHelper";

const { VITE_API_PREFIX_LIST } = import.meta.env;

export const ERROR_MESSAGE = {
    LIST_NOT_FOUND: "존재하지 않는 리스트 입니다.",
};

export const listHandler = [
    rest.get(`${VITE_API_PREFIX_LIST}/:listId`, async (req, res, ctx) => {
        const auth = req.headers.get("Authorization");
        if (!auth) {
            return res(ctx.status(401));
        }

        const { listId } = req.params;

        try {
            const list = await database.list.get(listId);

            if (!list) {
                return await res(
                    ctx.status(404),
                    ctx.json({ message: ERROR_MESSAGE.LIST_NOT_FOUND }),
                );
            }
            const card = await database.card.where("listId").equals(listId).toArray();

            const result = {
                ...list,
                card: card.map(
                    ({
                        id,
                        listId: llistId,
                        createdBy,
                        modifiedAt,
                        title,
                        description,
                        position,
                    }) => ({
                        id,
                        listId: llistId,
                        createdBy,
                        modifiedAt,
                        title,
                        description,
                        position,
                    }),
                ),
            };
            return await res(ctx.status(200), ctx.json(result));
        } catch (e) {
            return res(ctx.status(500));
        }
    }),
    rest.post(`${VITE_API_PREFIX_LIST}`, async (req, res, ctx) => {
        const auth = req.headers.get("Authorization");
        if (!auth) {
            return res(ctx.status(401));
        }

        const { boardId, title } = await req.json();

        try {
            const pos = await database.list.where("boardId").equals(boardId).count();

            const result = await database.list.add({
                id: uuidGenerator(),
                boardId,
                title,
                createdBy: auth,
                createdAt: new Date().toString(),
                modifiedAt: new Date().toString(),
                position: pos + 1,
            });

            return await res(ctx.status(201), ctx.json(result));
        } catch (e) {
            return res(ctx.status(500));
        }
    }),
    rest.delete(`${VITE_API_PREFIX_LIST}/:listId`, async (req, res, ctx) => {
        const auth = req.headers.get("Authorization");
        if (!auth) {
            return res(ctx.status(401));
        }

        const { listId } = req.params;

        try {
            const list = await database.list.get(listId);

            if (!list) {
                return await res(
                    ctx.status(404),
                    ctx.json({ message: ERROR_MESSAGE.LIST_NOT_FOUND }),
                );
            }

            await database.list.delete(listId);

            return await res(ctx.status(204));
        } catch (e) {
            return res(ctx.status(500));
        }
    }),
];
