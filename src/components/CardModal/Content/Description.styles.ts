import styled from "styled-components";

export const Description = styled.input`
    background-color: #091e420a;
    min-height: 30px;
    padding: 8px 12px;
    text-decoration: none;
    border: none;
    border-radius: 3px;
    vertical-align: middle;
    align-items: center;
    display: flex;

    &:focus {
        min-height: 100px;
    }

    @media only screen and (max-width: 1200px) {
        width: 100%;
        margin: -10px 0;
        padding: 0;
    }
`;

export const ButtonWrapper = styled.div`
    cursor: auto;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 30px;
    padding: 12px 0 0 0;

    @media only screen and (max-width: 1200px) {
        margin: 20px 0px;
        padding: 0;
    }
`;

export const SubmitButton = styled.button<{ bgColor: string }>`
    outline: none;
    text-align: center;
    align-items: center;
    border-radius: 3px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    justify-content: center;
    line-height: 20px;
    padding: 6px 16px;
    white-space: normal;
    color: ${(props) => props.color};
    background-color: ${(props) => props.bgColor};
    border: none;
    box-shadow: none;
    float: left;
    margin: 0 12px 0 0;

    &:hover {
        background-color: #3e3ea1;
    }
`;
