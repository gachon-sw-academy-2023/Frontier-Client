import styled from "styled-components";

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 1/2;
    grid-row: 2/3;
    @media only screen and (max-width: 1200px) {
        order: 0;
    }
`;

export const ContentTitle = styled.div`
    color: black;
    font-size: 20px;
    padding: 20px 0px;
    min-height: 32px;
`;

export const ContentBody = styled.text`
    background-color: #091e420a;
    display: flex;
    min-height: 100px;
    padding: 8px 12px;
    text-decoration: none;

    @media only screen and (max-width: 1200px) {
        width: 100%;
        margin: 8px 0;
        padding: 0;
    }
`;
