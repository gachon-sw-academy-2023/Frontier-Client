import { factory } from "@mswjs/data";
import userModel from "@/mocks/database/models/userModel";
import cardModel from "@/mocks/database/models/cardModel";
import userSample from "@/mocks/database/samples/userSample.json";
import cardSample from "@/mocks/database/samples/cardSample.json";

const database = factory({
    ...userModel,
    ...cardModel,
});

userSample.forEach((user) => database.user.create(user));
cardSample.forEach((card) => database.card.create(card));

export default database;
