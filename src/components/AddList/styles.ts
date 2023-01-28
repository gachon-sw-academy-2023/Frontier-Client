import styled from "styled-components";

const AddListButton = styled.div`
    background-color: rgba(0, 0, 0, 0.12);
    border-radius: 10px;
    cursor: pointer;
    color: #fff;
    display: flex;
    align-items: center;
    min-height: 32px;
    padding: 5px 8px;
    transition: background-color 85ms ease-in, opacity 40ms ease-in, border-color 85ms ease-in;
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

const ListTitleInput = styled.input`
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
