import styled from "styled-components";

const Board = styled.div`
    height: 100vh;
    display: flex;
    overflow-x: auto;
    background-color: #1e90ff;
`;

const Card = styled.div`
    position: relative;
    cursor: pointer;
    background: white;
    margin: 5px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid rgba(9, 45, 66, 0.25);
    box-shadow: 0 1px 0 rgba(9, 45, 66, 0.25);
    font-size: 15px;
    overflow-wrap: break-word;
    min-height: 18px;

    :hover {
        background-color: #f5f6f7;
    }
`;

const Form = styled.form`
    width: 90%;
    margin: 0 auto;
    input {
        width: 100%;
        background-color: transparent;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #1f1f1f;
        text-align: center;
        height: 25px;
    }
    input:focus {
        outline: none;
    }
`;

export { Card, Board, Form };
