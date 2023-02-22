import styled from "styled-components";
import { Link } from "react-scroll";

export const FooterWrapper = styled.div`
    width: 100%;
`;

export const FooterOverlay = styled.div`
    background-color: #0a0836;
`;

export const FooterInner = styled.div`
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    padding: 0px 30px;
    @media only screen and (max-width: 859px) {
        padding: 0 15px;
    }
`;

export const FooterItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
    @media (max-width: 550px) {
        flex-direction: column;
    }
`;

export const Logo = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const Info = styled.div`
    font-size: 0.8rem;
    color: white;
    @media (max-width: 550px) {
        margin: 20px 0;
    }
`;

export const Top = styled(Link)`
    color: white;
    cursor: pointer;
    font-size: 0.8rem;
`;
