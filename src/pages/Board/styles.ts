import styled from "styled-components";

const BoardContent = styled.div`
    display: flex;
`;

const Board = styled.div`
    margin-top: 7vh;
    margin-left: 250px;
    background-color: #3179ba;
    overflow-y: fix;
    overflow-x: fix;
    display: flex;
    min-height: 100vh;
    height: auto;
    width: 100%;
`;

export { BoardContent, Board };
