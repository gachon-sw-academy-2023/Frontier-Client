import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/utils/routes";
import { EMAIL_REGEX, PASSWORD_REGEX } from "@/utils/validation";
import {
    ERROR_EMAIL_VALIDATION,
    ERROR_PASSWORD_VALIDATION,
    ERROR_EMAIL_DUPLICATED,
    ERROR_SIGNUP_FAIL,
} from "@/utils/error-message";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from "react-hook-form";
import S from "./styles";

type UserSignUpFormData = {
    name: string;
    email: string;
    password: string;
};

const RegisterFrom = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserSignUpFormData>();

    const onSubmit = handleSubmit((data) => {
        setIsLoading(true);
        axios
            .post("/signup", { name: data.name, email: data.email, password: data.password })
            .then((res) => {
                if (res.status === 200) {
                    setIsLoading(false);
                    navigate(ROUTES.LOGIN);
                } else if (res.status === 204) {
                    setIsLoading(false);
                    setError(ERROR_EMAIL_DUPLICATED);
                }
            })
            .catch(() => {
                console.log("회원가입 실패");
                setError(ERROR_SIGNUP_FAIL);
                setIsLoading(false);
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
