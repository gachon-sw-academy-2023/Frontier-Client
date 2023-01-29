import * as S from "@/components/GlobalStyle";
import LoginForm from "@/components/LoginForm";
import Logo from "@/assets/images/Trello-logo.png";
import { Image } from "./styles";

const Login = () => (
    <S.FlexCenterWrap>
        <Image src={Logo} alt="" />
        <LoginForm />
    </S.FlexCenterWrap>
);

export default Login;
