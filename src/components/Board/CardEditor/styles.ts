import styled from "styled-components";
// eslint-disable-next-line import/no-extraneous-dependencies
import TextareaAutosize from "react-textarea-autosize";
import S from "../Card/styles";
import { Header, Title } from "../../GlobalStyle";

const EditButton = styled.button`
    background: ${(props) => props.color};
    color: #fff;
    transition: background 0.3s ease;
    min-height: 32px;
    padding: 0 16px;
    border: none;
    margin: 5px 5px 5px 10px;
    font-weight: bold;
    border-radius: 3px;
    font-size: 14px;
    cursor: pointer;
    outline: none;
    :hover {
        opacity: 0.7;
    }
`;

const EditButtons = styled.div`
    display: flex;
`;

const EditCardTextarea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    outline: none;
`;

const EditCardHeader = styled(Header)`
    border-bottom: 1px solid #eee;
    padding-bottom: 6px;
    color: #000;
`;

const EditCardTitle = styled(Title)`
    font-size: 14px;
`;

const EditCardDetail = styled.div`
    font-size: 12px;
    color: #4d4d4d;
    white-space: pre-wrap;
`;

const EditCard = styled(S.Card)`
    min-height: 50px;
    padding-left: 8px;
    padding-right: 15px;

    :hover {
        background: white;
    }
`;

export default {
    EditCardTitle,
    EditCardDetail,
    EditButton,
    EditButtons,
    EditCardTextarea,
    EditCard,
    EditCardHeader,
};
