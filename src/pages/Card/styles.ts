import styled from "styled-components";

export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: min-content auto min-content;
    margin: 80px auto 0 auto;
    width: 50vw;
    height: 90vh;
    background-color: white;
    @media only screen and (max-width: 1200px) {
        display: flex;
        flex-direction: column;
    }
`;
