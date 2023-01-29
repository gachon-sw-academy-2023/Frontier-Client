import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import * as I from "./Header.interfaces";

export const HeaderContainer = styled.header`
    background-color: ${(props: I.HeaderContainer) => {
        return props.bgColor || "white";
    }};
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0.625rem;
    z-index: 10;
`;

export const LogoContainer = styled.img`
    height: 70px;
`;

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavMenu = styled(NavLink)`
    color: #2a3342;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: bold;
    &:hover {
        color: #15cdfc;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: black;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(NavLink)`
    border-radius: 4px;
    background: #22c55e;
    padding: 10px 22px;
    color: #f0fdf4;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #10dc55;
        color: black;
    }
`;
