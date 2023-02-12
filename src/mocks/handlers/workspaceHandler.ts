import { rest } from "msw";
import { database } from "@/mocks/database";
import { uuidGenerator } from "@/utils/uuidHelper";

const { VITE_API_PREFIX_WORKSPACE } = import.meta.env;

export const ERROR_MESSAGE = {
    WORKSPACE_NOT_FOUND: "존재하지 않는 워크스페이스 입니다.",
};

export const workspaceHandler = [
    rest.get(`${VITE_API_PREFIX_WORKSPACE}`, async (req, res, ctx) => {
        const auth = req.headers.get("Authorization");
        if (!auth) {
            return res(ctx.status(401));
        }

        try {
            const workspace = await database.workspace.where("member").equals(auth).toArray();

            const board = await database.board
                .where("workspaceId")
                .anyOf(workspace.map((v) => v.id))
                .toArray();

            const result = workspace.map(({ id, title, createdBy, createdAt, modifiedAt }) => ({
                id,
                title,
                createdBy,
                createdAt,
                modifiedAt,
                board: board.filter((v) => v.workspaceId === id),
            }));

            return await res(ctx.status(200), ctx.json(result));
        } catch (e) {
            return res(ctx.status(500));
        }
    }),
    rest.get(`${VITE_API_PREFIX_WORKSPACE}/:workspaceId`, async (req, res, ctx) => {
        const auth = req.headers.get("Authorization");
        if (!auth) {
            return res(ctx.status(401));
        }

        const { workspaceId } = req.params;

        try {
            const workspace = await database.workspace.get(workspaceId);

            if (!workspace) {
                return await res(
                    ctx.status(404),
                    ctx.json({ message: ERROR_MESSAGE.WORKSPACE_NOT_FOUND }),
                );
            }
            if (!workspace.member.includes(auth)) {
                return await res(ctx.status(403));
            }

            const board = await database.board.where("workspaceId").anyOf(workspace.id).toArray();

            const result = {
                id: workspace.id,
                title: workspace.title,
                createdBy: workspace.createdBy,
                createdAt: workspace.createdAt,
                modifiedAt: workspace.modifiedAt,
                board,
            };

            return await res(ctx.status(200), ctx.json(result));
        } catch (e) {
            return res(ctx.status(500));
        }
    }),
    rest.post(`${VITE_API_PREFIX_WORKSPACE}`, async (req, res, ctx) => {
        const auth = req.headers.get("Authorization");
        if (!auth) {
            return res(ctx.status(401));
        }

        const { title } = await req.json();

        try {
            const result = await database.workspace.add({
                id: uuidGenerator(),
                title,
                createdBy: auth,
                createdAt: new Date().toString(),
                modifiedAt: new Date().toString(),
                member: [auth],
            });

            return await res(ctx.status(201), ctx.json(result));
        } catch (e) {
            return res(ctx.status(500));
        }
    }),
    rest.delete(`${VITE_API_PREFIX_WORKSPACE}/:workspaceId`, async (req, res, ctx) => {
        const auth = req.headers.get("Authorization");
        if (!auth) {
            return res(ctx.status(401));
        }

        const { workspaceId } = req.params;

        try {
            const workspace = await database.workspace.get(workspaceId);

            if (!workspace) {
                return await res(
                    ctx.status(404),
                    ctx.json({ message: ERROR_MESSAGE.WORKSPACE_NOT_FOUND }),
                );
            }
            if (!workspace.member.includes(auth)) {
                return await res(ctx.status(403));
            }

            await database.workspace.delete(workspaceId)

            return await res(ctx.status(204));
        } catch (e) {
            return res(ctx.status(500));
        }
    }),
];
