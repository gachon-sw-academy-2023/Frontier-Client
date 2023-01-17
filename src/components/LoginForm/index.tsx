import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/utils/routes";
import S from "./styles";

const LoginForm = () => {
    const [useremail, setUserEmail] = useState("");
    const [userpassword, setUserPassword] = useState("");
    const navigate = useNavigate();
    // const [loading, setLoading] = useState(false);
    // const [isLogin, setIsLogin] = useState(false);

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post("/user", { email: useremail, password: userpassword }).then((res) => {
            console.log(res);
            if (res.status === 200) {
                navigate(ROUTES.HOMEPAGE);
            }
        });

        // msw 테스트 코드 ... 삭제 예정
        // axios.get("/test").then((res) => {
        //     console.log(res);
        // });
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
            <S.Button type="submit"> 로그인 </S.Button>
        </S.InputContainer>
    );
};

export default LoginForm;
