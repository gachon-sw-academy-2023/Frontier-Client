import styled from "styled-components";

const Input = styled.input`
    width: 100%;
    border: 2px solid #f5f6f8;
    box-sizing: border-box;
    padding: 10px;
    margin: 5px;
    background-color: white;
`;

const InputContainer = styled.form`
    width: 350px;
    background-color: white;
`;

const Button = styled.button`
    width: 100%;
    background-color: #1e90ff;
    color: white;
    box-sizing: border-box;
    padding: 10px;
    margin: 5px;
    border: 0;
    cursor: pointer;
`;

export default { Input, InputContainer, Button };
