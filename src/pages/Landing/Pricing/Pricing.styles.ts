import styled from "styled-components";

export const PricingWrapper = styled.section`
    width: 100%;
    padding: 50px 0;
`;

export const PricingOverlay = styled.div`
    background-color: #f5f5f5;
`;

export const PricingInnerWrapper = styled.div`
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    padding: 0px 30px;
    @media only screen and (max-width: 859px) {
        padding: 0 15px;
    }
`;

export const PricingHeader = styled.div`
    margin-bottom: 50px;
    padding-top: 50px;
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

export const TableWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 30px;
    justify-content: space-between;
    @media (max-width: 860px) {
        flex-direction: column;
    }
`;

export const TableInnerWrapper = styled.div`
    width: 30%;
    @media (max-width: 860px) {
        width: 100%;
        max-width: 370px;
        margin: 0 auto;
    }
`;

export const TableItemWrapper = styled.div`
    width: 100%;
    text-align: left;
    padding: 20px 30px;
    margin-top: 30px;
    border-radius: 1rem;
    background-color: white;
    box-shadow: 0 0 11px rgba(237, 232, 237, 0.5);
`;

export const TableHeader = styled.div`
    display: flex;
    font-size: 2.5rem;
    justify-content: space-between;
    align-items: center;
`;

export const TableHeaderPrice = styled.p`
    font-size: 1.875rem;
    font-weight: 800;
`;

export const TableHeaderDescription = styled.div`
    margin: 30px 0;
`;

export const TableHeaderTitle = styled.h4`
    font-size: 1.875rem;
    font-weight: 800;
`;

export const TableHeaderSubTitle = styled.p`
    font-size: 0.8rem;
`;

export const TableContent = styled.div`
    display: flex;
    align-items: center;
    margin: 15px 0;
`;

export const TableContentInner = styled.div`
    position: relative;
    top: -1px;
    margin-right: 15px;
`;

export const Check = styled.div`
    min-width: 20px;
    font-size: 1.5rem;
`;

export const ContentName = styled.p`
    font-size: 1.25rem;
    font-weight: 800;
`;
