import styled from "styled-components";
import backgroundImage from "src/assets/images/backgroundImg-human.png";

const Container = styled.div`
    background-image: url(${backgroundImage});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position-y: bottom;
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
`;

const Title = styled.div`
    width: 100%;
    align-items: center;
`;

const Image = styled.img`
    width: 240px;
`;

export { Image, Title, Container };
