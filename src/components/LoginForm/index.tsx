import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "@/utils/routes";
import { emailValidator, passwordValidator } from "@/utils/validation";
import {
    ERROR_EMAIL_VALIDATION,
    ERROR_PASSWORD_VALIDATION,
    ERROR_USER_NOTFOUND,
    ERROR_VALIDATION_FAIL,
} from "@/utils/error-message";
import S from "./styles";

const LoginForm = () => {
    const [useremail, setUserEmail] = useState("");
    const [userpassword, setUserPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const validateEmailAndPassword = (email: string, password: string) => {
        if (!emailValidator(email) || email === null) {
            setError(ERROR_EMAIL_VALIDATION);
            return false;
        }
        if (!passwordValidator(password) || password === null) {
            setError(ERROR_PASSWORD_VALIDATION);
            return false;
        }

        return true;
    };

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        if (validateEmailAndPassword(useremail, userpassword)) {
            axios
                .post("/user", { email: useremail, password: userpassword })
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
        } else {
            setError(ERROR_VALIDATION_FAIL);
            setIsLoading(false);
        }
    };

    return (
        <S.InputContainer onSubmit={handleLogin}>
            <S.Input
                type="text"
                id="userEmail"
                placeholder="Email"
                maxLength={20}
                autoComplete="off"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setUserEmail(e.target.value);
                }}
            />
            <S.Input
                type="password"
                id="userPW"
                placeholder="PW"
                maxLength={20}
                autoComplete="off"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setUserPassword(e.target.value);
                }}
            />
            <S.ErrorText> {error} </S.ErrorText>
            <S.Button color="#1e90ff" type="submit" disabled={isLoading}>
                Login
            </S.Button>
            <S.Button color="#ff0000" type="submit" disabled={isLoading}>
                Continue with Google
            </S.Button>
            <p>
                Don&apos;t have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
            </p>
        </S.InputContainer>
    );
};

export default LoginForm;
