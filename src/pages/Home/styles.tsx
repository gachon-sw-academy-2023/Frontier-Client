import styled from "styled-components";

const Home = styled.div`
    margin: 0 auto 0 auto;
`;

const HomeBody = styled.div`
    display: flex;
    width: 80%;
    margin: 50px auto 0 auto;
`;

const HomeSide = styled.div`
    flex-direction: column;
    align-items: center;
    width: 20%;
    height: 100%;
`;

const SideTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px 0 20px 0;
`;

const SideBottom = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    border-top: solid 0.2px;
`;

const SideContent = styled.div`
    display: flex;
    justify-content: space-between;
    color: gray;
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    color: ${(props) => props.color || "black"};
`;

const SideButton = styled.button`
    display: flex;
    justify-content: space-between;
    text-align: left;
    border: none;
    width: 100%;
    padding: 10px;
    font-weight: bold;
    &:hover {
        background-color: rgb(231, 233, 237);
    }
`;

const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 30px 30px 30px;
    width: 100%;
`;

const HomeH1 = styled.h1`
    font-weight: bold;
    font-size: 25px;
    color: gray;
    padding: 20px;
`;

const HomeWorkspace = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-weight: bold;
`;

const HomeBox = styled.div`
    display: flex;
    flex-direction: row;
`;

export default {
    Home,
    HomeBody,
    HomeSide,
    SideTop,
    SideBottom,
    SideContent,
    SideButton,
    HomeContent,
    HomeH1,
    HomeWorkspace,
    HomeBox,
};
