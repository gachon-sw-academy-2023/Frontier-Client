import React from "react";
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
import useLoginQuery from "@/queries/useLoginQuery";
import { UserLogin } from "@/interfaces/userInterface";
import S from "./styles";

const LoginForm = () => {
    const { mutate, isLoading, error } = useLoginQuery();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserLogin>();

    const onSubmit = handleSubmit((data) => {
        mutate(data, {
            onSuccess: () => {
                navigate(ROUTES.HOMEPAGE);
            },
        });
    });

    return (
        <S.InputContainer onSubmit={onSubmit}>
            <S.Input
                type="text"
                id="userEmail"
                placeholder="Email"
                autoComplete="off"
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
