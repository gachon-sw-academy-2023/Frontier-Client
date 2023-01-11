import * as S from "@/components/GlobalStyle";

import LoginForm from "@/components/LoginForm";
import Logo from "@/assets/images/Trello-logo.png";

const Login = () => {
    return (
        <S.FlexCenterWrap>
            <img className=" w-80" src={Logo} alt="" />
            <LoginForm />
        </S.FlexCenterWrap>
    );
};

export default Login;
