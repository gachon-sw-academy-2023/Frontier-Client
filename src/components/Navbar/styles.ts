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
    background-color: rgba(2, 106, 167);
    padding: 10px;
`;

const HeadUl = styled.ul`
    list-style: none;
    display: flex;
    margin: 15px;
    padding: 15px;
    align-items: center;
`;

const HeadLiitem = styled.li`
    list-style: none;
    display: flex;
    padding: 5px 20px;
    margin: 5px;
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

const HeadLiimg = styled.img`
    background-color: white;
    border-radius: 30%;
    width: 27px;
    src: ${(props) => props.src || user_img};
`;

const HeadUserInfo = styled.div`
    display: flex;
    padding: 5px 20px;
    margin: 5px;
`;

const HeadUserName = styled.div`
    padding-left: 10px;
    color: white;
`;

const Image = styled.img`
    width: 150px;
    margin-right: 20px;
`;

const HeadLink = styled(Link)`
    text-decoration: none;
    color: white;
`;

const HeadCreate = styled.button`
    border: none;
    background-color: rgba(1, 74, 117, 0.8);
    color: white;
    padding: 7px 20px;
    margin: 5px 5px 5px 15px;
    font-size: 15px;
    vertical-align: middle;
    &:hover {
        background-color: rgba(1, 74, 117, 0.5);
    }
`;

export default {
    Image,
    HeadNav,
    HeadUl,
    HeadLiimg,
    HeadLiitem,
    HeadUserInfo,
    HeadUserName,
    HeadLink,
    HeadCreate,
};
