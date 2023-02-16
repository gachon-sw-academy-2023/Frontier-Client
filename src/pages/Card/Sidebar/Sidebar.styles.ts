import styled from "styled-components";

export const SidebarWrapper = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;
`;

export const ActionDescription = styled.h3`
    line-height: 20px;
    font-weight: 600;
    font-size: 12px;
    color: #5e6c84;
    padding: 6px 12px;
    margin: 0 0 -4px;
    @media only screen and (max-width: 1200px) {
        text-align: center;
    }
`;
export const ActionButton = styled.button<{ active: boolean }>`
    display: ${(props) => (props.active ? `block` : `none`)};
    font-size: 14px;
    background-color: #091e420a;
    border: none;
    border-radius: 3px;
    box-sizing: border-box;
    cursor: pointer;
    height: 2.5em;
    margin: 1em 0.5em;
    padding: 2px;
    min-width: 90%;
    text-align: left;
    text-decoration: none;
    text-overflow: ellipsis;
    outline: rgba(255, 0, 0, 0.15) solid 1px;

    &:hover {
        background-color: #d2d2d2;
    }
    @media only screen and (max-width: 1200px) {
        width: 100%;
        margin: 8px 0;
        padding: 0;
        text-align: center;
    }
`;

export const ActionIcon = styled.div`
    display: inline-block;
    width: 10%;
    height: 100%;
    padding: 2px 6px;
    margin: 4px 2px;
    @media only screen and (max-width: 1200px) {
        width: 10%;
        margin: 0px -6px;
        padding: 10px 1px;
    }
`;
