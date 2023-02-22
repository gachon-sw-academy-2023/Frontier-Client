import * as S from "@/pages/Landing/Footer/Footer.styles";

const Footer = () => (
    <S.FooterWrapper>
        <S.FooterOverlay>
            <S.FooterInner>
                <S.FooterItems>
                    <S.Logo to="home" smooth offset={-80} />
                    <S.Info>2023 - Frontier All Right Reserved</S.Info>
                    <S.Top to="home" smooth offset={-80}>
                        Go to Top
                    </S.Top>
                </S.FooterItems>
            </S.FooterInner>
        </S.FooterOverlay>
    </S.FooterWrapper>
);

export default Footer;
