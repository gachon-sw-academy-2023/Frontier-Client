import styled from "styled-components";

export const ErrorContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
`;

export const ErrorCard = styled.div`
    width: 1000px;
    height: 800px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
`;

export const ErrorCode = styled.h1`
    font-size: 8rem;
    margin: 0;
    color: #e74c3c;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ErrorMessage = styled.p`
    font-size: 2.5rem;
    margin: 0;
    margin-top: 1rem;
    text-align: center;
    color: #4d4d4d;
`;

export const GoBackButton = styled.button`
    background-color: #e74c3c;
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 1rem 2rem;
    font-size: 1.6rem;
    margin-top: 2rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #fff;
        color: #e74c3c;
        border: 2px solid #e74c3c;
    }
`;
