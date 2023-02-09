import React from "react";

import Logo from "@/assets/images/Trello-logo.png";
import RegisterFrom from "@/components/auth/RegisterForm";
import * as S from "@/components/GlobalStyle";
import { Title, Image } from "@/pages/SignUp/styles";

const SignUp = () => (
    <S.FlexCenterWrap>
        <Title />
        <Image src={Logo} alt="" />
        <RegisterFrom />
    </S.FlexCenterWrap>
);

export default SignUp;
