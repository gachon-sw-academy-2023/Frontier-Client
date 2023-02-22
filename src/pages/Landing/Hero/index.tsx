import heroLeftImage from "@/assets/images/hero-background.jpeg";
import * as S from "./Hero.styles";

const Hero = () => (
    <>
        <S.HeroWrapper id="home">
            <S.LeftSide>
                <div>
                    <S.Title>Simplify Your Project Management.</S.Title>
                    <S.SubTitle>
                        Streamline Your Projects and Boost Your Team`s Productivity with Ease
                    </S.SubTitle>
                    <S.BtnWrapper>
                        <S.Button to="/login">Get Started</S.Button>
                    </S.BtnWrapper>
                </div>
            </S.LeftSide>
            <S.RightSide>
                <S.ImageWrapper>
                    <S.Img src={heroLeftImage} alt="heroLeftImage" />
                </S.ImageWrapper>
                <S.GreyDiv />
            </S.RightSide>
        </S.HeroWrapper>
        <S.LogoList>
            <S.ReactLogo />
            <S.ViteLogo />
            <S.TypeScriptLogo />
            <S.JestLogo />
            <S.CypressLogo />
            <S.StyledComponentLogo />
        </S.LogoList>
    </>
);

export default Hero;
