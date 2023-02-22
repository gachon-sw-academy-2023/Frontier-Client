import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { SiVite, SiTypescript, SiJest, SiCypress, SiStyledcomponents } from "react-icons/si";

export const HeroWrapper = styled.section`
    width: 100%;
    min-height: 840px;
    max-width: 1220px;
    margin: 0 auto;
    padding: 0px 30px;
    padding-top: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 859px) {
        padding: 0 15px;
    }
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;
export const LeftSide = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 960px) {
        width: 100%;
        order: 2;
        margin: 50px 0;
        text-align: center;
    }
    @media (max-width: 560px) {
        margin: 80px 0 50px 0;
    }
`;

export const Title = styled.h1`
    font-weight: 800;
    font-size: 3.75rem;
    line-height: 4.5rem;
    @media only screen and (max-width: 859px) {
        font-size: 2.8rem;
    }
`;
export const SubTitle = styled.div`
    max-width: 470px;
    padding: 15px 0 50px 0;
    line-height: 1.5rem;
    font-weight: 600;
    font-size: 1.2rem;
    @media only screen and (max-width: 859px) {
        font-size: 0.75rem;
    }
    @media (max-width: 960px) {
        padding: 15px 0 50px 0;
        text-align: center;
        max-width: 100%;
    }
`;
export const BtnWrapper = styled.div`
    max-width: 190px;
    @media (max-width: 960px) {
        margin: 0 auto;
    }
`;

export const Button = styled.button`
    transition: 0.3s ease;
    cursor: pointer;
    border-radius: 1em;
    border: 1px solid #7620ff;
    background-color: #7620ff;
    width: 100%;
    padding: 15px;
    outline: none;
    color: white;
    &:hover {
        background-color: #500cd2;
        border: 1px solid #7620ff;
        color: white;
    }
`;
export const RightSide = styled.div`
    width: 50%;
    height: 100%;
    @media (max-width: 960px) {
        width: 100%;
        order: 1;
        margin-top: 30px;
    }
`;

export const GreyDiv = styled.div`
    width: 30%;
    height: 700px;
    background-color: #f5f5f5;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
    @media (max-width: 960px) {
        display: none;
    }
`;
export const ImageWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;

    @media (max-width: 960px) {
        width: 100%;
        justify-content: center;
    }
`;
export const Img = styled.img`
    border-radius: 1rem;
    z-index: 9;
    width: 100%;
    height: auto;
    @media (max-width: 560px) {
        width: 80%;
        height: auto;
    }
`;

export const LogoList = styled.div`
    display: flex;
    background-color: #f5f5f5;
    justify-content: space-between;
    width: 100%;
    max-height: 160px;
    @media (max-width: 960px) {
        display: none;
    }
`;

export const ReactLogo = styled(FaReact)`
    width: 80%;
    height: auto;
    padding: 30px;
    margin: 10px;
    color: #444242;
`;

export const ViteLogo = styled(SiVite)`
    width: 80%;
    height: auto;
    padding: 30px;
    margin: 10px;
    color: #444242;
`;

export const TypeScriptLogo = styled(SiTypescript)`
    width: 80%;
    height: auto;
    padding: 30px;
    margin: 10px;
    color: #444242;
`;

export const JestLogo = styled(SiJest)`
    width: 80%;
    height: auto;
    padding: 30px;
    margin: 10px;
    color: #444242;
`;

export const CypressLogo = styled(SiCypress)`
    width: 80%;
    height: auto;
    padding: 30px;
    margin: 10px;
    color: #444242;
`;

export const StyledComponentLogo = styled(SiStyledcomponents)`
    width: 80%;
    height: auto;
    padding: 30px;
    margin: 10px;
    color: #444242;
`;
