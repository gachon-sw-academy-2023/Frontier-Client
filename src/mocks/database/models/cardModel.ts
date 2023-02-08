import {primaryKey, nullable, oneOf, manyOf} from "@mswjs/data";
import { uuidGenerator } from "@/utils/uuidHelper";

const cardModel = {
    card: {
        id: primaryKey<string>(() => uuidGenerator()),
        title: String,
        description: String,
        createdBy: String,
        createdAt: Date,
        modifiedAt: Date,
        contents: {
            members: nullable(Array),
            labels: nullable(Array),
            checklist: nullable(Object),
            dates: nullable(Object),
            attachments: nullable(String),
            markdown: nullable(String),
        },
    },
};

export default cardModel;
