import { FaUserCircle, FaUserPlus } from "react-icons/fa";
import styled from "styled-components";

export const MemberWrapper = styled.div`
    background-color: white;
    min-height: 30px;
    padding: 8px 12px;
    text-decoration: none;
    border: none;
    border-radius: 3px;
    vertical-align: middle;
    display: flex;

    @media only screen and (max-width: 700px) {
        flex-direction: column;
        width: 100%;
        margin: -10px 0;
        padding: 0;
    }
`;

export const Member = styled.div`
    height: 100%;
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;

    @media only screen and (max-width: 700px) {
        align-items: center;
        align-content: center;
        justify-content: center;
        margin: -10px 0;
        padding: 0;
    }
`;
export const MemberIcon = styled(FaUserCircle)`
    color: salmon;
    width: 13%;
    height: 100%;
    @media only screen and (max-width: 700px) {
        width: 3%;
    }
`;
export const MemberName = styled.div`
    text-align: center;
    padding: 10px;
`;

export const PlusIcon = styled(FaUserPlus)`
    color: salmon;
    width: 13%;
    height: 100%;
    @media only screen and (max-width: 700px) {
        width: 8%;
        align-self: center;
    }

    &:hover {
        color: black;
    }
`;
