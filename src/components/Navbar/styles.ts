import styled from "styled-components";
import { Link } from "react-router-dom";
import user_img from "@/assets/images/user-img.png";

const HeadNav = styled.nav`
    position: fixed;
    display: flex;
    z-index: 10;
    width: 100vw;
    height: 5vh;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(2, 106, 167);
    padding: 10px;
`;

const HeadUl = styled.ul`
    list-style: none;
    display: flex;
    margin: 15px;
    padding: 15px;
`;

const HeadLiitem = styled.li`
    list-style: none;
    display: flex;
    padding: 5px 20px;
    margin: 5px;
`;

const HeadLiimg = styled.img`
    background-color: white;
    border-radius: 30%;
    width: 27px;
    src: ${(props) => props.src || user_img};
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
    height: 25px;
    background-color: rgb(1, 74, 117);
    color: white;
    margin: 1px 0 0 0;
    padding: 0px 15px;
    font-size: 15px;
`;

export default { Image, HeadNav, HeadUl, HeadLiimg, HeadLiitem, HeadLifunc, HeadLink, HeadCreate };
