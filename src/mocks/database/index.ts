import { factory } from "@mswjs/data";
import userModel from "@/mocks/database/models/userModel";
import userSample from "@/mocks/database/samples/userSample.json";

const database = factory({
    ...userModel,
});

userSample.forEach((v) => database.user.create(v));

export default database;
