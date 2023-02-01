import styled from "styled-components";

const List = styled.div`
    background-color: #dfe3e6;
    flex-shrink: 0;
    width: 272px;
    height: fit-content;
    margin: 10px;
    margin-right: 0;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.12);
`;

const ListTitle = styled.div`
    cursor: pointer;
    padding: 14px 14px 10px 10px;
    overflow-wrap: break-word;
    font-weight: bold;
    font-size: 18px;
`;

const AddListEditor = styled.div`
    background-color: #dfe3e6;
    border-radius: 4px;
    padding: 2px 2px;
`;

export { List, ListTitle, AddListEditor };
