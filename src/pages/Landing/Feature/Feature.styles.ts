import styled from "styled-components";

export const FeatureWrapper = styled.section`
    width: 100%;
`;

export const FeatureOverlay = styled.div`
    padding: 60px 0;
    background-color: white;
`;

export const FeatureInner = styled.div`
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    padding: 0px 30px;
    @media only screen and (max-width: 859px) {
        padding: 0px 15px;
    }
`;

export const FeatureHeader = styled.div`
    @media (max-width: 860px) {
        text-align: center;
    }
`;

export const HeaderTitle = styled.h1`
    font-size: 3em;
    font-weight: 800;
    @media only screen and (max-width: 859px) {
        font-size: 2.3rem;
    }
`;

export const HeaderSubTitle = styled.p`
    font-size: 1.3rem;
`;

export const FeatureList = styled.div`
    display: flex;
    @media (max-width: 860px) {
        flex-direction: column;
    }
`;

export const FeatureListInner = styled.div`
    width: 20%;
    margin-right: 5%;
    padding: 80px 0;
    @media (max-width: 860px) {
        width: 100%;
        text-align: center;
        padding: 40px 0;
    }
`;

export const FeatureItemWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const FeatureItemIcon = styled.div`
    font-size: 2rem;
    @media (max-width: 860px) {
        margin: 0 auto;
    }
`;

export const FeatureItemTitle = styled.h2`
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    padding: 40px 0;
    font-size: 1.55rem;
    font-weight: 800;
    @media (max-width: 860px) {
        padding: 20px 0;
    }
`;

export const FeatureItemSubTitle = styled.p`
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    font-size: 1.1rem;
`;
