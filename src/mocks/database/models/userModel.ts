import { primaryKey } from "@mswjs/data";

const userModel = {
    user: {
        id: primaryKey(String),
        name: String,
        email: String,
        password: String,
    },
};

export default userModel;
