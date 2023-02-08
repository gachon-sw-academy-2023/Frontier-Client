/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import styled from "styled-components";
import LogoImg from "src/assets/images/Trello-Logo.png";
import { useNavigate } from "react-router-dom";
import { AiFillSetting, AiFillPlusCircle } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { boardState } from "@/recoil/atom";
import ReactTextareaAutosize from "react-textarea-autosize";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Popover, PopoverBody, PopoverHeader } from "styled-popover-component";
import dayjs from "dayjs";

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: rgb(59 130 246);
    color: white;
    padding: 7px 7px;
`;

const Image = styled.img`
    width: 50px;
    :hover {
        cursor: pointer;
    }
`;

const NavContent = styled.div`
    width: 32px;
    height: 32px;
    text-align: center;
    padding-top: 14px;
    :hover {
        opacity: 0.5;
        cursor: pointer;
    }
`;

const Boards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 10px 3px;
    margin-bottom: 24px;
`;

const Board = styled.div`
    height: 100px;
    width: 85%;
    background-color: rgb(40 130 200);
    border-radius: 4px;
    padding: 8px;
    font-weight: 600;
    color: white;
    :hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

const WorkspaceContainer = styled.div`
    padding: 36px 24px;
`;

const WorkspaceTitle = styled.div`
    font-size: 25px;
    line-height: 28px;
    margin-bottom: 12px;
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

const BoardTitle = styled.span`
    font-weight: bold;
    font-size: 15px;
    line-height: 25px;
    width: 70%;
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

const Workspace = () => {
    const [boardTitle, setBoardTitle] = useState("");
    const [boardDescription, setBoardDescription] = useState("");
    const [boards, setBoards] = useRecoilState(boardState);
    const [hidden, setHidden] = useState(true);
    const [position, setPosition] = useState([0, 0]);
    const navigate = useNavigate();

    const handleCreateBoard = () => {
        setBoards((prev) => [
            ...prev,
            {
                id: Date.now(),
                title: boardTitle,
                description: boardDescription,
                date: dayjs().format("YYYY-MM-DD"),
            },
        ]);
        setBoardTitle("");
        setBoardDescription("");
        setHidden(true);
    };

    const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBoardTitle(e.target.value);
    };
    const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBoardDescription(e.target.value);
    };

    return (
        <>
            <Nav>
                <Image src={LogoImg} onClick={() => navigate("/homepage")} />
                <NavContent>
                    <AiFillSetting />
                </NavContent>
            </Nav>
            <WorkspaceContainer>
                <WorkspaceTitle> WORKSPACE_NAME </WorkspaceTitle>
                <Boards>
                    <AddBoard
                        onClick={(ev) => {
                            setHidden((current) => !current);
                            setPosition([
                                ev.currentTarget.offsetTop - ev.currentTarget.offsetHeight,
                                ev.currentTarget.offsetLeft + ev.currentTarget.offsetWidth,
                            ]);
                        }}
                    >
                        <AiFillPlusCircle />
                    </AddBoard>
                    {boards.map((board) => (
                        <Board key={board.id} onClick={() => navigate(`/board/${board.title}`)}>
                            <BoardHeader>
                                <BoardTitle> {board.title} </BoardTitle>
                            </BoardHeader>
                            <BoardDetail> {board.description} </BoardDetail>
                        </Board>
                    ))}
                </Boards>
            </WorkspaceContainer>

            <PopoverSizeUp
                hidden={hidden}
                style={{
                    top: `${position[0]}px`,
                    left: `${position[1]}px`,
                }}
                right
            >
                <PopoverHeader right> Create Board </PopoverHeader>
                <PopoverBodyTitle right>Title</PopoverBodyTitle>
                <PopoverBody right>
                    <TitleTextArea placeholder="Board Title..." onChange={handleChangeTitle} />
                </PopoverBody>
                <PopoverBodyTitle right>Description</PopoverBodyTitle>
                <PopoverBody right>
                    <DescriptionTextArea
                        placeholder="Board Description..."
                        onChange={handleChangeDescription}
                    />
                </PopoverBody>
                <PopoverBody>
                    <CreateButton color="#5aac44" onClick={handleCreateBoard}>
                        Create Board
                    </CreateButton>
                    <CreateButton color="#999999" onClick={() => setHidden((current) => !current)}>
                        Cancel
                    </CreateButton>
                </PopoverBody>
            </PopoverSizeUp>
        </>
    );
};

export default Workspace;
