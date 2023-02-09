import BaseDexie from "dexie";
import { UserTable, userSchema } from "@/mocks/database/stores/userStore";
import { CardTable, cardSchema } from "@/mocks/database/stores/cardStore";
import { ListTable, listSchema } from "@/mocks/database/stores/listStore";
import { BoardTable, boardSchema } from "@/mocks/database/stores/boardStore";
import { userSample } from "@/mocks/database/samples/userSample";
import { cardSample } from "@/mocks/database/samples/cardSample";
import { listSample } from "@/mocks/database/samples/listSample";
import { boardSample } from "@/mocks/database/samples/boardSample";

interface DexieTables extends UserTable, CardTable, ListTable, BoardTable {}
interface Dexie extends BaseDexie, DexieTables {}

const schema = { ...userSchema, ...cardSchema, ...listSchema, ...boardSchema };
export const database = new BaseDexie("Frontier") as Dexie;

database.version(1).stores(schema);

database.on("populate", () => {
    database.user.bulkAdd(userSample);
    database.card.bulkAdd(cardSample);
    database.list.bulkAdd(listSample);
    database.board.bulkAdd(boardSample);
});
database.open();
