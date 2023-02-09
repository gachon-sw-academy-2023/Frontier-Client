import styled from "styled-components";

const Home = styled.div`
    margin: 0;
    background-color: white;
`;

const HomeBody = styled.div`
    display: flex;
`;

const HomeContent = styled.div`
    margin-top: 7vh;
    margin-left: 250px;
    display: flex;
    flex-direction: column;
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
    HomeContent,
    HomeH1,
    HomeWorkspace,
    HomeBox,
};
