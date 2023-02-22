import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as NavLink } from "react-router-dom";

export const NavWrapper = styled.nav<{ position: number }>`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease;
    background-color: white;
    height: ${(props) => (props.position > 100 ? `100px` : `80px`)};
`;
export const NavInner = styled.div`
    position: relative;
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    padding: 0px 30px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavLogoWrapper = styled(Link)`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const NavLogo = styled.img`
    height: 60px;
`;
export const NavListWrapper = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    @media (max-width: 760px) {
        display: none;
    }
`;

export const NavList = styled.li`
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
`;

export const NavItem = styled(Link)`
    padding: 10px 15px;

    &.active {
        border-bottom: 2px solid #7620ff;
        color: #7620ff;
    }
`;
export const CTAWrapper = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    @media (max-width: 760px) {
        display: none;
    }
`;

export const LoginWrapper = styled.li`
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
`;

export const Login = styled(NavLink)`
    padding: 10px 30px 10px 0;
    text-decoration: none;
    color: black;
    &:hover {
        color: #7620ff;
    }
`;

export const SignUpWrapper = styled.li`
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SignUp = styled(NavLink)`
    padding: 10px 15px;
    border-radius: 1rem;
    text-decoration: none;
    color: black;
    background-color: #f5f5f5;
    &:hover {
        color: #7620ff;
    }
`;
