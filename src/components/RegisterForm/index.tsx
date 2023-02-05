import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/utils/routes";
import { EMAIL_REGEX, PASSWORD_REGEX } from "@/utils/validation";
import {
    ERROR_EMAIL_VALIDATION,
    ERROR_PASSWORD_VALIDATION,
    ERROR_EMAIL_DUPLICATED,
} from "@/utils/error-message";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from "react-hook-form";
import useSignUpQuery from "@/queries/useSignUpQuery";
import { useSetRecoilState } from "recoil";
import { userAtom } from "@/recoil/userAtom";
import S from "./styles";

type UserSignUpFormData = {
    name: string;
    email: string;
    password: string;
};

const RegisterFrom = () => {
    const { mutate, isLoading, error } = useSignUpQuery();
    const setUser = useSetRecoilState(userAtom);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserSignUpFormData>();

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
            <p className="text-lg font-bold text-center mb-5"> Sign up for your account </p>
            <S.Input
                type="text"
                id="userName"
                placeholder="Name"
                maxLength={20}
                autoComplete="off"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("name")}
            />
            <S.Input
                type="text"
                id="userEmail"
                placeholder="Email"
                maxLength={20}
                autoComplete="off"
                // eslint-disable-next-line react/jsx-props-no-spreading
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
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("password", { required: true, pattern: PASSWORD_REGEX })}
            />
            {errors.password && errors.password.type === "pattern" && (
                <S.ErrorText> {ERROR_PASSWORD_VALIDATION} </S.ErrorText>
            )}
            <S.Button color="#1e90ff" disabled={isLoading}>
                회원가입
            </S.Button>
            {error && <S.ErrorText> {ERROR_EMAIL_DUPLICATED} </S.ErrorText>}
        </S.InputContainer>
    );
};

export default RegisterFrom;
