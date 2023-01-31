import styled from "styled-components";
// eslint-disable-next-line import/no-extraneous-dependencies
import TextareaAutosize from "react-textarea-autosize";
import { Card } from "../Card/styles";

const ToggleAddCard = styled.div`
    cursor: pointer;
    padding: 10px;
    color: #6b808c;
    border-radius: 0 0 10px 10px;
    display: flex;
    align-items: center;

    :hover {
        background-color: rgba(9, 45, 66, 0.13);
        color: #17394d;
        text-decoration: underline;
    }
`;

const EditButton = styled.button`
    background: ${(props) => props.color};
    color: #fff;
    transition: background 0.3s ease;
    min-height: 32px;
    padding: 0 16px;
    margin: 5px 5px;
    font-weight: bold;
    border-radius: 3px;
    font-size: 14px;
    cursor: pointer;
    :hover {
        opacity: 0.7;
    }
`;

const EditButtonCancel = styled.button`
    background: #999999;
    color: #ffffff;
    transition: background 0.3s ease;
    min-height: 32px;
    padding: 0 16px;
    margin: 5px 5px;
    font-weight: bold;
    border-radius: 3px;
    font-size: 14px;
    cursor: pointer;
`;

const EditButtons = styled.div`
    display: flex;
`;

const EditCardTextarea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    resize: none;
    outline: none;
    font-size: 15px;
`;

const EditCard = styled(Card)`
    min-height: 50px;
    padding-left: 8px;
    padding-right: 15px;

    :hover {
        background: white;
    }
`;

export { EditButton, ToggleAddCard, EditButtonCancel, EditButtons, EditCardTextarea, EditCard };
