import styled from "styled-components";
import * as I from "./Hero.interfaces";

export const HeroContainer = styled.div<I.HeroContainer>`
    width: 100%;
    height: calc(100vh - 100px);
    position: relative;
    background-image: url(${(props) => props.bgImage});
    background-size: cover;
    background-position: top;
`;

export const HeroContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    opacity: 0.9;
    align-items: center;
    align-content: center;
    justify-content: center;
`;

export const HeroTitle = styled.div`
    font-size: 6rem;
    color: #2a3342;
    margin: 2rem 2rem;
    font-weight: 800;
`;
