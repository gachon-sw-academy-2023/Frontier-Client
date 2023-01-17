export const emailValidation = (id: string) => {
    const emailRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
    if (!emailRegex.test(id)) {
        return true;
    }
    return false;
};

export const passwordValidation = (password: string) => {
    const passwordRegex = /^.{8,20}$/;
    if (!passwordRegex.test(password)) {
        return true;
    }
    return false;
};
