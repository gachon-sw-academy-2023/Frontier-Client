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
    background-color: rgba(2, 106, 167, 1);
    padding: 10px;
    overflow: hidden;
`;

const HeadUl = styled.ul`
    list-style: none;
    display: flex;
    margin: 15px;
    padding: 15px;
    align-items: center;
`;

const DropDownButton = styled.div`
    margin: 0;
    border: none;
    outline: none;
`;

const DropDownContent = styled.div`
    display: none;
    position: fixed;
    z-index: 1;
    background-color: white;
    margin-left: -20px;
    margin-top: 30px;
    padding: 10px;
    text-align: center;
    align-items: center;
    border: 0.2px solid;
`;

const DropDownBox = styled.button`
    float: none;
    color: black;
    display: block;
    padding: 12px 10px;
    margin: 10px;
`;

const HeadLiitem = styled.li`
    list-style: none;
    display: flex;
    padding: 5px 20px;
    margin: 5px;
    overflow: hidden;
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
    &:hover ${DropDownContent} {
        display: block;
    }
`;

const HeadLiimg = styled.img`
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
    DropDownButton,
    DropDownContent,
    DropDownBox,
};
