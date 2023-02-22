import styled from "styled-components";
import ReactTextareaAutosize from "react-textarea-autosize";
import { Popover, PopoverBody } from "styled-popover-component";
import S from "@/components/BoardBox/styles";

const Boards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 20px 3px;
    margin-bottom: 24px;
    margin-top: 16px;
`;

const WorkspaceContainer = styled.div`
    margin-left: 280px;
    display: flex;
    flex-direction: column;
`;

const WorkspaceTitle = styled.div`
    margin-top: 100px;
    font-size: 25px;
    line-height: 28px;
    font-weight: 700;
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

const Text = styled.span`
    margin-top: 40px;
    font-size: 20px;
`;

const AddBoard = styled(S.Board)`
    display: flex;
    background-color: #a99f9f;
    justify-content: center;
    align-items: center;

    :hover {
        opacity: 0.7;
        cursor: pointer;
    }
`;

const WorkspaceWrapper = styled.div`
    margin: 0;
    background-color: white;
`;

export default {
    Boards,
    WorkspaceWrapper,
    WorkspaceContainer,
    WorkspaceTitle,
    CreateButton,
    DescriptionTextArea,
    TitleTextArea,
    PopoverBodyTitle,
    PopoverSizeUp,
    Text,
    AddBoard,
};
