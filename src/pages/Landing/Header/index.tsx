import LogoImage from "@/assets/images/Frontier-Logo2.png";
import { useEffect, useState } from "react";
import * as S from "./Header.styles";

const Header = () => {
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
                    <S.NavList>
                        <S.NavItem activeClass="active" to="home" spy smooth offset={-80}>
                            Home
                        </S.NavItem>
                    </S.NavList>
                    <S.NavList>
                        <S.NavItem activeClass="active" to="services" spy smooth offset={-80}>
                            Services
                        </S.NavItem>
                    </S.NavList>
                    <S.NavList>
                        <S.NavItem activeClass="active" to="projects" spy smooth offset={-80}>
                            Projects
                        </S.NavItem>
                    </S.NavList>
                    <S.NavList>
                        <S.NavItem activeClass="active" to="blog" spy smooth offset={-80}>
                            Blog
                        </S.NavItem>
                    </S.NavList>
                    <S.NavList>
                        <S.NavItem activeClass="active" to="pricing" spy smooth offset={-80}>
                            Pricing
                        </S.NavItem>
                    </S.NavList>
                    <S.NavList>
                        <S.NavItem activeClass="active" to="contact" spy smooth offset={-80}>
                            Contact
                        </S.NavItem>
                    </S.NavList>
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
