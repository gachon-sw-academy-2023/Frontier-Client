import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeSide = styled.div`
    position: fixed;
    z-index: 5;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: 95vh;
    margin-top: 7vh;
    background-color: white;
`;

const SideTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2vh 0 2vh 0;
`;

const SideBottom = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border-top: solid 0.2px;
`;

const SideContent = styled.div`
    display: flex;
    justify-content: space-between;
    color: gray;
    width: 80%;
    margin-top: 10px;
    padding: 10px 10px 20px 10px;
    flex-direction: ${(props) => props.dir || "15px"}};
    color: ${(props) => props.color || "black"};
`;

const SideButton = styled.button`
    display: flex;
    justify-content: space-between;
    text-align: left;
    border: none;
    width: 80%;
    padding: 10px;
    margin: 5px;
    font-weight: bold;
    &:hover {
        background-color: rgb(231, 233, 237);
        color: white;
    }
`;

const SideLink = styled(Link)`
    color: black;
    text-styled: none;
    text-decoration: none;
    &:hover {
        color: white;
    }
    &:visited {
        text-decoration: none;
    }
`;

export default { HomeSide, SideTop, SideBottom, SideContent, SideButton, SideLink };
