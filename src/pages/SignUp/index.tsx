import React from "react";

import Logo from "@/assets/images/Trello-logo.png";
import RegisterFrom from "@/components/RegisterForm";
import S from "./styles";

const SignUp = () => {
    return (
        <S.Container>
            <S.Title>
                <S.LogoImg className=" w-80">
                    <img src={Logo} alt="" />
                </S.LogoImg>
            </S.Title>
            <RegisterFrom />
        </S.Container>
    );
};

export default SignUp;
