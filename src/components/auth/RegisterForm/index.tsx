import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/utils/routes";
import { EMAIL_REGEX, PASSWORD_REGEX } from "@/utils/validation";
import {
    ERROR_EMAIL_VALIDATION,
    ERROR_PASSWORD_VALIDATION,
    ERROR_EMAIL_DUPLICATED,
} from "@/utils/error-message";
import { useForm } from "react-hook-form";
import { useRegisterQuery } from "@/queries/useAuthQuery";
import { RegisterReqBody } from "@/interfaces/authInterface";
import { useSetRecoilState } from "recoil";
import { userAtom } from "@/recoil/userAtom";
import AuthButton from "../AuthButton";
import S from "./styles";

const RegisterFrom = () => {
    const { mutate, isLoading, error } = useRegisterQuery();
    const setUser = useSetRecoilState(userAtom);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterReqBody>();

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
            <S.Text> Sign up for your account </S.Text>
            <S.Input
                type="text"
                id="userName"
                placeholder="Name"
                maxLength={20}
                autoComplete="off"
                {...register("name")}
            />
            <S.Input
                type="text"
                id="userEmail"
                placeholder="Email"
                maxLength={20}
                autoComplete="off"
                {...register("email", { required: true, pattern: EMAIL_REGEX })}
            />
            {errors.email && errors.email.type === "pattern" && (
                <S.ErrorText> {ERROR_EMAIL_VALIDATION} </S.ErrorText>
            )}
            <S.Input
                type="password"
                id="userPassword"
                placeholder="Password"
                maxLength={20}
                autoComplete="off"
                {...register("password", { required: true, pattern: PASSWORD_REGEX })}
            />
            {errors.password && errors.password.type === "pattern" && (
                <S.ErrorText> {ERROR_PASSWORD_VALIDATION} </S.ErrorText>
            )}
            <AuthButton color="#1e90ff" type="button" disabled={isLoading} contents="회원가입" />
            {error && <S.ErrorText> {ERROR_EMAIL_DUPLICATED} </S.ErrorText>}
        </S.InputContainer>
    );
};

export default RegisterFrom;
