import styled from "styled-components";
import ReactTextareaAutosize from "react-textarea-autosize";
import { Popover, PopoverBody } from "styled-popover-component";
import S from "@/components/Homepage/Box/styles";

const Home = styled.div`
    margin: 0;
    background-color: white;
`;

const HomeBody = styled.div`
    display: flex;
`;

const HomeContent = styled.div`
    margin-top: 7vh;
    margin-left: 250px;
    display: flex;
    flex-direction: column;
`;

const HomeH1 = styled.h1`
    font-weight: bold;
    font-size: 25px;
    color: gray;
    padding: 20px;
`;

const HomeWorkspace = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-weight: bold;
`;

const HomeBox = styled.div`
    display: flex;
    width: 100vw;
`;

const WorkspaceTitle = styled.span`
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
`;

const AddBoardBox = styled(S.Board)`
    font-size: 28px;
    justify-content: center;
    align-items: center;
    background-color: #a99f9f;
    :hover {
        opacity: 0.8;
    }
`;
const PopoverSizeUp = styled(Popover)`
    min-width: 320px;
    background-color: #feffff;
`;
const PopoverBodyTitle = styled(PopoverBody)`
    font-size: 13px;
    font-weight: 700;
    margin-top: 12px;
`;

const TitleTextArea = styled(ReactTextareaAutosize)`
    width: 100%;
    border: none;
    outline: none;
`;

const DescriptionTextArea = styled(TitleTextArea)`
    min-height: 50px;
`;

const CreateButton = styled.button`
    background: ${(props) => props.color};
    color: #fff;
    transition: background 0.3s ease;
    min-height: 32px;
    padding: 0 16px;
    margin: 5px 5px;
    font-weight: bold;
    border-radius: 3px;
    font-size: 14px;
    border: none;
    cursor: pointer;
    :hover {
        opacity: 0.7;
    }
`;

export default {
    TitleTextArea,
    PopoverBodyTitle,
    CreateButton,
    DescriptionTextArea,
    PopoverSizeUp,
    WorkspaceTitle,
    Home,
    HomeBody,
    HomeContent,
    HomeH1,
    HomeWorkspace,
    HomeBox,
    AddBoardBox,
};
