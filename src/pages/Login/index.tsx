import * as S from "@/components/GlobalStyle";
import LoginForm from "@/components/auth/LoginForm";
import Logo from "@/assets/images/Frontier-Logo2.png";
import { Image } from "./styles";

const Login = () => (
    <S.FlexCenterWrap>
        <Image src={Logo} alt="" />
        <LoginForm />
    </S.FlexCenterWrap>
);

export default Login;
