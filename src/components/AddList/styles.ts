import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

const AddListButton = styled.div`
    background: #2b6aa3;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
    display: flex;
    align-items: center;
    min-height: 32px;
    padding: 5px 8px;
    transition: background 0.3s ease;
    height: fit-content;

    :hover {
        background-color: rgba(0, 0, 0, 0.24);
    }
`;
const AddListEditor = styled.div`
    background-color: #dfe3e6;
    border-radius: 4px;
    padding: 2px 2px;
`;

const ListTitleEdit = styled.div`
    display: flex;
    align-items: center;
`;

const ListTitleInput = styled(TextareaAutosize)`
    margin: 6px 0 5px 6px;
    border-radius: 4px;
    border: none;
    resize: none;
    outline: none;
    font-size: 15px;
    padding: 5px;
    box-shadow: 0 0 0 2px #0079bf;
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

const AddList = styled.div`
    width: 272px;
    margin: 10px;
    flex-shrink: 0;
`;

export {
    AddList,
    AddListButton,
    EditButtons,
    AddListEditor,
    ListTitleInput,
    ListTitleEdit,
    EditButton,
    EditButtonCancel,
};
