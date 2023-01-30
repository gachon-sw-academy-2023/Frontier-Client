import heroBackgroundImage from "@/assets/images/hero-background.jpeg";
import * as S from "./Hero.styles";

const Hero = () => {
    return (
        <S.HeroContainer className="home" bgImage={heroBackgroundImage}>
            <S.HeroContent>
                <S.HeroTitle>Manage your project effectively</S.HeroTitle>
            </S.HeroContent>
        </S.HeroContainer>
    );
};

export default Hero;
