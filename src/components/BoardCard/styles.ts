import styled from "styled-components";

const BoardBox = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: solid 2px;
    border-radius: 8px;
    width 300px;
    padding: 10px;
    margin: 10px 20px 10px 0px;
    color: white;
    background-color: skyblue;
    transition: all 0.3s cubic-bezier(0.42, 0.0, 0.58, 1.0);
    &:hover {
        box-shadow: 0 4px 28px rgba(0,50,100,25), 0 1px rgba(0,25,50,0.22);
        transform: translateY(10px);
    }
`;

const BoardImg = styled.div`
    width: 100%;
    padding: 0;
    border: solid 2px;
`;

const BoardFunc = styled.span`
    align-item: right;
`;

export default { BoardBox, BoardImg, BoardFunc };
