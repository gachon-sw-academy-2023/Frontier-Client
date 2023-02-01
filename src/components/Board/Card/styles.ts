import styled from "styled-components";
import { Header, Title } from "../../GlobalStyle";

const Card = styled.div`
    position: relative;
    cursor: pointer;
    background: white;
    margin: 7px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    box-shadow: 0 1px 0 rgba(9, 45, 66, 0.15);
    font-size: 15px;
    overflow-wrap: break-word;
    border-radius: 3px;

    max-width: 250px;
    min-width: 230px;
    min-height: 80px;

    :hover {
        background-color: #eee;
    }
`;

const CardTitle = styled(Title)`
    padding-top: 4px;
    padding-left: 4px;
    font-size: 14px;
    min-height: 40px;
`;

const CardDetail = styled.div`
    font-size: 12px;
    padding-top: 4px;
    padding-left: 4px;
    color: #4d4d4d;
    white-space: pre-wrap;
`;

const CardHeader = styled(Header)`
    border-bottom: 1px solid #e5e5e5;
    color: #000;
`;

const CardDate = styled.span`
    width: 38%;
    text-align: right;
    padding-top: 4px;
    padding-right: 10px;
    font-size: 10px;
`;

const HoverButton = styled.div`
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin: 1px;
    :hover {
        background: #f5f6f7;
        opacity: 0.5;
    }
`;

export default { HoverButton, CardDate, CardDetail, CardTitle, Card, Header, CardHeader };
