import { rest } from "msw";
import { database } from "@/mocks/database";
import { uuidGenerator } from "@/utils/uuidHelper";

const { VITE_API_PREFIX_BOARD } = import.meta.env;

export const ERROR_MESSAGE = {
    BOARD_NOT_FOUND: "존재하지 않는 보드 입니다.",
};

export const boardHandler = [
    rest.get(`${VITE_API_PREFIX_BOARD}/:boardId`, async (req, res, ctx) => {
        const auth = req.headers.get("Authorization");
        if (!auth) {
            return res(ctx.status(401));
        }

        const { boardId } = req.params;

        try {
            const board = await database.board.get(boardId);

            if (!board) {
                return await res(
                    ctx.status(404),
                    ctx.json({ message: ERROR_MESSAGE.BOARD_NOT_FOUND }),
                );
            }

            const list = await database.list.where("boardId").equals(boardId).toArray();
            const card = await database.card
                .where("listId")
                .anyOf(list.map((v) => v.id))
                .toArray();

            const result = {
                ...board,
                list: list.map(({ id, title, createdBy, createdAt, modifiedAt, position }) => ({
                    id,
                    title,
                    createdBy,
                    createdAt,
                    modifiedAt,
                    position,
                    card: card.filter((v) => v.listId === id),
                })),
            };

            return await res(ctx.status(200), ctx.json(result));
        } catch (e) {
            return res(ctx.status(500));
        }
    }),
    rest.post(`${VITE_API_PREFIX_BOARD}`, async (req, res, ctx) => {
        const auth = req.headers.get("Authorization");
        if (!auth) {
            return res(ctx.status(401));
        }

        const { workspaceId, title } = await req.json();

        try {
            const result = await database.board.add({
                id: uuidGenerator(),
                workspaceId,
                title,
                createdBy: auth,
                createdAt: new Date().toString(),
                modifiedAt: new Date().toString(),
            });

            return await res(ctx.status(201), ctx.json(result));
        } catch (e) {
            return res(ctx.status(500));
        }
    }),
    rest.delete(`${VITE_API_PREFIX_BOARD}/:boardId`, async (req, res, ctx) => {
        const auth = req.headers.get("Authorization");
        if (!auth) {
            return res(ctx.status(401));
        }

        const { boardId } = req.params;
    })
];
