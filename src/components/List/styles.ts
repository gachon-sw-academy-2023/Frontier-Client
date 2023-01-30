import styled from "styled-components";

const List = styled.div`
    background-color: #dfe3e6;
    flex-shrink: 0;
    width: 272px;
    height: fit-content;
    margin: 10px;
    margin-right: 0;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.12);
`;

const ListTitle = styled.div`
    cursor: pointer;
    padding: 10px;
    overflow-wrap: break-word;
`;

const AddListEditor = styled.div`
    background-color: #dfe3e6;
    border-radius: 5px;
    padding: 2px 2px;
`;

export { List, ListTitle, AddListEditor };
