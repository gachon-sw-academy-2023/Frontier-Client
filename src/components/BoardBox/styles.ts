import styled from "styled-components";

const BoardTitle = styled.span`
    font-weight: bold;
    font-size: 15px;
    line-height: 25px;
    width: 90%;
`;

const BoardDetail = styled.div`
    font-size: 12px;
    color: white;
    white-space: pre-wrap;
`;

const BoardHeader = styled.header`
    margin-bottom: 10px;
    min-height: 40%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

const Board = styled.div`
    height: 150px;
    width: 85%;
    background-color: rgb(40 130 200);
    border-radius: 4px;
    padding: 8px;
    font-weight: 600;
    color: white;
    transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
    &:hover {
        cursor: pointer;
        opacity: 0.8;
        box-shadow: 0 4px 28px rgba(0, 50, 100, 25), 0 1px rgba(0, 25, 50, 0.22);
        transform: translateY(5px);
    }
`;

const Button = styled.div`
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin: 5px;
    :hover {
        opacity: 0.5;
    }
`;

export default {
    Button,
    Board,
    BoardDetail,
    BoardHeader,
    BoardTitle,
};
