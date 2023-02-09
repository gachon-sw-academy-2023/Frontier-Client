// eslint-disable-next-line import/no-extraneous-dependencies
import { v4, version, validate } from "uuid";

export const uuidGenerator = (): string => v4();

export const uuidValidator = (uuid: string): boolean => validate(uuid) && version(uuid) === 4;
