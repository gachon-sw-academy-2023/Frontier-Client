import styled from "styled-components";

const Input = styled.input`
    width: 100%;
    border: 2px solid #f5f6f8;
    box-sizing: border-box;
    padding: 8px;
    margin: 5px;
    background-color: white;
`;

const InputContainer = styled.form`
    width: 300px;
    display: flex;
    flex-direction: column;
    background-color: white;
`;

const Button = styled.button`
    width: 100%;
    background: ${(props) => {
        return props.color;
    }};
    color: white;
    box-sizing: border-box;
    padding: 7px;
    margin: 5px;
    border: 0;
    cursor: pointer;
`;

const ErrorText = styled.span`
    width: 100%;
    font-size: small;
    color: red;
    text-align: center;
    margin-bottom: 5px;
    margin-top: 5px;
`;

export default { ErrorText, Input, InputContainer, Button };
