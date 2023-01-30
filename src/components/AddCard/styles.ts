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

const EditButtonCancel = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 15px;
    opacity: 0.5;
    outline: none;
    :hover {
        opacity: 1;
    }
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

const EditButton = styled.button`
    cursor: pointer;
    box-shadow: 0 1px 0 0 #3f6f21;
    background: ${(props) => {
        return props.color;
    }};
    width: fit-content;
    margin: 5px 5px 5px;
    padding: 6px 12px;
    border-radius: 5px;
    color: white;
    font-weight: 700;
    outline: none;
    :hover {
        opacity: 0.7;
    }
`;

export { EditButton, ToggleAddCard, EditButtonCancel, EditButtons, EditCardTextarea, EditCard };
