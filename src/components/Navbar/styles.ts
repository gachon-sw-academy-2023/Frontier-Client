import styled from "styled-components";
import { Link } from "react-router-dom";

const HeadNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(2, 106, 167);
    padding: 10px;
    margin: -8px;
    margin-bottom: 15px;
`;

const HeadUl = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
`;

const HeadLiitem = styled.li`
    list-style: none;
    display: flex;
    padding: 5px 20px;
    margin: 5px;
`;

const HeadLifunc = styled.li`
    padding: 0px 10px;
`;

const Image = styled.img`
    width: 45px;
`;

const HeadLink = styled(Link)`
    text-decoration: none;
    color: white;
`;

const HeadCreate = styled.button`
    border: none;
    height: 100%;
    background-color: rgb(1, 74, 117);
    color: white;
    margin: 1px 0 0 0;
    padding: 0px 15px;
    font-size: 15px;
`;

export default { Image, HeadNav, HeadUl, HeadLiitem, HeadLifunc, HeadLink, HeadCreate };
