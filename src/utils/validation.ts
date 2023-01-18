const emailValidator = (id: string) => {
    const emailRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
    return emailRegex.test(id);
};

const passwordValidator = (password: string) => {
    const passwordRegex = /^.{8,20}$/;
    return passwordRegex.test(password);
};

export { emailValidator, passwordValidator };
