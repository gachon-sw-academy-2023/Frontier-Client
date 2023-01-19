import styled from "styled-components";

const Home = styled.div`
    margin-left: auto;
    margin-right: auto;
`;

const HomeBody = styled.div`
    display: flex;
    width: 80%;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    border: solid 2px;
`;

const HomeSide = styled.div`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 50px;
    width: 20%;
    hegith: 100%;
    border: solid 2px;
`;

const SideTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10px;
`;

const SideBottom = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    border-top: solid 2px;
`;

const SideContent = styled.div`
    display: flex;
    justify-content: space-between;
    color: gray;
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    font-size: ${(props) => {
        return props.fsize || "15px";
    }};
    color: ${(props) => {
        return props.color || "black";
    }};
`;

const SideButton = styled.button`
    display: flex;
    justify-content: space-between;
    text-align: left;
    border: none;
    width: 100%;
    padding: 10px;
    font-weight: bold;
`;

const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`;

const HomeWorkspace = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

const HomeBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    border: solid 2px;
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
    HomeWorkspace,
    HomeBox,
};
