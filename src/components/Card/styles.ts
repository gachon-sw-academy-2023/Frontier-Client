import styled from "styled-components";
import { Header, Title } from "../GlobalStyle";

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

    :hover {
        background-color: #f0f0f0;
    }
`;

const CardTitle = styled(Title)`
    font-size: 14px;
    min-height: 30px;
`;

const CardDetail = styled.div`
    font-size: 12px;
    color: #4d4d4d;
    white-space: pre-wrap;
`;

const CardHeader = styled(Header)`
    border-bottom: 1px solid #eee;
    padding-bottom: 6px;
    color: #000;
`;

export default { CardDetail, CardTitle, Card, Header, CardHeader };
