import styled from "styled-components";

const Box = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: solid 3px;
    border-radius: 8px;
    width: 250px;
    padding: 10px;
    margin: 10px 20px 10px 0px;
    color: white;
    background-color: skyblue;
    transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
    &:hover {
        box-shadow: 0 4px 28px rgba(0, 50, 100, 25), 0 1px rgba(0, 25, 50, 0.22);
        transform: translateY(5px);
    }
`;

const BoxContent = styled.div`
    width: 100%;
    padding: 0;
`;

const BoardFunc = styled.span`
    align-items: right;
`;

export default { Box, BoxContent, BoardFunc };
