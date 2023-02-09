import styled from "styled-components";
import S from "@/components/Board/Card/styles";
import { Header } from "@/components/GlobalStyle";

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

const ListHeader = styled(Header)`
    border-bottom: 1px solid #e5e5e5;
    color: #000;
`;

const ListTitle = styled.div`
    cursor: pointer;
    padding: 14px 14px 10px 10px;
    overflow-wrap: break-word;
    font-weight: bold;
    font-size: 18px;
`;

const HoverButtons = styled.div`
    margin-left: auto;
    margin-right: 15px;
    margin-top: 14px;
    display: flex;
`;

const HoverEditButton = styled(S.HoverButton)`
    padding-right: 5px;
`;

export default { HoverButtons, ListHeader, List, ListTitle, HoverEditButton };
