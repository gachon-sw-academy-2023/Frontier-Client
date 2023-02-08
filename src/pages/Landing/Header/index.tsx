import LogoImage from "@/assets/images/Frontier-Logo2.png";
import * as S from "./Header.styles";

const Header = () => (
    <>
        <S.HeaderContainer>
            <S.LogoContainer src={LogoImage} />
            <S.NavContainer>
                <S.NavMenu to="homepage">Home</S.NavMenu>
                <S.NavMenu to="#features">Features</S.NavMenu>
                <S.NavMenu to="#stats">Stats</S.NavMenu>
            </S.NavContainer>
            <S.NavBtn>
                <S.NavBtnLink to="/login">Login</S.NavBtnLink>
            </S.NavBtn>
        </S.HeaderContainer>
    </>
);

export default Header;
