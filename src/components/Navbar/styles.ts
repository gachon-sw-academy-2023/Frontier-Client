import styled from "styled-components";
import { Link } from "react-router-dom";

const nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(2, 106, 167);
    padding: 25px 5px;
    margin: -8px;
    margin-bottom: 15px;
`;

const ul = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
`;

const liitem = styled.li`
    padding: 0px 20px;
`;

const lifunc = styled.li`
    padding: 0px 10px;
`;

const link = styled(Link)`
    text-decoration: none;
    color: white;
`;

const create = styled.button`
    border: none;
    background-color: rgb(1, 74, 117);
    color: white;
    padding: 5px 20px;
`;

export default { nav, ul, liitem, lifunc, link, create };
