import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "@/utils/routes";
import { EMAIL_REGEX, PASSWORD_REGEX } from "@/utils/validation";
import {
    ERROR_EMAIL_VALIDATION,
    ERROR_PASSWORD_VALIDATION,
    ERROR_USER_NOTFOUND,
} from "@/utils/error-message";
import { useForm } from "react-hook-form";
import useLoginQuery from "@/queries/useLoginQuery";
import { UserLogin } from "@/interfaces/userInterface";
import { useSetRecoilState } from "recoil";
import { userAtom } from "@/recoil/userAtom";
import AuthButton from "../AuthButton";
import S from "./styles";

const LoginForm = () => {
    const { mutate, isLoading, error } = useLoginQuery();
    const setUser = useSetRecoilState(userAtom);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserLogin>();

    const onSubmit = handleSubmit((data) => {
        mutate(data, {
            onSuccess: (res) => {
                setUser(res.data);
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
            <AuthButton color="#1e90ff" type="submit" disabled={isLoading} contents="Login" />
            {error && <S.ErrorText> {ERROR_USER_NOTFOUND} </S.ErrorText>}
            <AuthButton
                color="#ff0000"
                type="button"
                disabled={isLoading}
                contents="Continue with Google"
            />
            <p>
                Don&apos;t have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
            </p>
        </S.InputContainer>
    );
};

export default LoginForm;
