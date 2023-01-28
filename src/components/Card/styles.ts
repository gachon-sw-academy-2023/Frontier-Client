import styled from "styled-components";

const Card = styled.div`
    position: relative;
    cursor: pointer;
    background: white;
    margin: 5px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid rgba(9, 45, 66, 0.25);
    box-shadow: 0 1px 0 rgba(9, 45, 66, 0.35);
    font-size: 15px;
    overflow-wrap: break-word;
    min-height: 18px;

    :hover {
        background-color: #f5f6f7;
    }
`;

export { Card };
