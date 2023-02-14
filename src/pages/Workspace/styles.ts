import styled from "styled-components";
import ReactTextareaAutosize from "react-textarea-autosize";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Popover, PopoverBody } from "styled-popover-component";

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

const BoardTitle = styled.span`
    font-weight: bold;
    font-size: 15px;
    line-height: 25px;
    width: 90%;
`;

const BoardDetail = styled.div`
    font-size: 12px;
    color: white;
    white-space: pre-wrap;
`;

const BoardHeader = styled.header`
    margin-bottom: 10px;
    min-height: 40%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

const Board = styled.div`
    height: 150px;
    width: 85%;
    background-color: rgb(40 130 200);
    border-radius: 4px;
    padding: 8px;
    font-weight: 600;
    color: white;
    transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
    &:hover {
        cursor: pointer;
        opacity: 0.8;
        box-shadow: 0 4px 28px rgba(0, 50, 100, 25), 0 1px rgba(0, 25, 50, 0.22);
        transform: translateY(5px);
    }
`;

const AddBoard = styled(Board)`
    display: flex;
    background-color: #a99f9f;
    justify-content: center;
    align-items: center;

    :hover {
        opacity: 0.7;
        cursor: pointer;
    }
`;

const Button = styled.div`
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin: 5px;
    :hover {
        opacity: 0.5;
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
    Board,
    BoardDetail,
    BoardHeader,
    BoardTitle,
    Button,
};
