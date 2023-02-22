import LogoImage from "@/assets/images/Frontier-Logo2.png";
import { useEffect, useState } from "react";
import * as S from "./Header.styles";

const Header = () => {
    const itemList = [
        {
            to: "home",
            title: "Home",
        },
        {
            to: "features",
            title: "Features",
        },
        {
            to: "pricing",
            title: "Pricing",
        },
    ];

    const [y, setY] = useState(window.scrollY);

    useEffect(() => {
        window.addEventListener("scroll", () => setY(window.scrollY));
        return () => {
            window.removeEventListener("scroll", () => setY(window.scrollY));
        };
    }, [y]);
    return (
        <S.NavWrapper position={y}>
            <S.NavInner>
                <S.NavLogoWrapper to="home" smooth>
                    <S.NavLogo src={LogoImage} alt="logo" />
                </S.NavLogoWrapper>
                <S.NavListWrapper>
                    {itemList.map((v) => (
                        <S.NavList key={v.title}>
                            <S.NavItem activeClass="active" to={v.to} spy smooth offset={-80}>
                                {v.title}
                            </S.NavItem>
                        </S.NavList>
                    ))}
                </S.NavListWrapper>
                <S.CTAWrapper>
                    <S.LoginWrapper>
                        <S.Login to="/login">Log in</S.Login>
                    </S.LoginWrapper>
                    <S.SignUpWrapper>
                        <S.SignUp to="/signup">Get Started</S.SignUp>
                    </S.SignUpWrapper>
                </S.CTAWrapper>
            </S.NavInner>
        </S.NavWrapper>
    );
};

export default Header;
