import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "@/utils/routes";
import { EMAIL_REGEX, PASSWORD_REGEX } from "@/utils/validation";
import {
    ERROR_EMAIL_VALIDATION,
    ERROR_PASSWORD_VALIDATION,
    ERROR_USER_NOTFOUND,
} from "@/utils/error-message";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from "react-hook-form";
import S from "./styles";

type UserFormData = {
    email: string;
    password: string;
};

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserFormData>();

    const onSubmit = handleSubmit((data) => {
        setIsLoading(true);
        axios
            .post("/user", { email: data.email, password: data.password })
            .then((res) => {
                if (res.status === 200) {
                    setIsLoading(false);
                    navigate(ROUTES.HOMEPAGE);
                }
            })
            .catch(() => {
                setError(ERROR_USER_NOTFOUND);
                setIsLoading(false);
            });
    });

    return (
        <S.InputContainer onSubmit={onSubmit}>
            <S.Input
                type="text"
                id="userEmail"
                placeholder="Email"
                autoComplete="off"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("email", { required: true, pattern: EMAIL_REGEX })}
            />
            {errors.email && errors.email.type === "pattern" && (
                <S.ErrorText> {ERROR_EMAIL_VALIDATION} </S.ErrorText>
            )}
            <S.Input
                type="password"
                id="userPW"
                placeholder="PW"
                maxLength={20}
                autoComplete="off"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("password", { required: true, pattern: PASSWORD_REGEX })}
            />
            {errors.password && errors.password.type === "pattern" && (
                <S.ErrorText> {ERROR_PASSWORD_VALIDATION} </S.ErrorText>
            )}
            <S.Button color="#1e90ff" type="submit" disabled={isLoading}>
                Login
            </S.Button>
            {error && <S.ErrorText> {ERROR_USER_NOTFOUND} </S.ErrorText>}
            <S.Button color="#ff0000" type="button" disabled={isLoading}>
                Continue with Google
            </S.Button>
            <p>
                Don&apos;t have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
            </p>
        </S.InputContainer>
    );
};

export default LoginForm;
