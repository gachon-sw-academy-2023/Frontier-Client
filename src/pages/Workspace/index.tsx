/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillSetting, AiFillPlusCircle, AiFillDelete } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { boardState } from "@/recoil/atom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { PopoverBody, PopoverHeader } from "styled-popover-component";
import LogoImg from "src/assets/images/Trello-Logo.png";
import dayjs from "dayjs";
import S from "./styles";

const Workspace = () => {
    const [boardTitle, setBoardTitle] = useState("");
    const [boardDescription, setBoardDescription] = useState("");
    const [boards, setBoards] = useRecoilState(boardState);
    const [hidden, setHidden] = useState(true);
    const [position, setPosition] = useState([0, 0]);
    const [isHover, setIsHover] = useState<boolean>(false);
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
            <S.Nav>
                <S.Image src={LogoImg} onClick={() => navigate("/homepage")} />
                <S.NavContent>
                    <AiFillSetting />
                </S.NavContent>
            </S.Nav>
            <S.WorkspaceContainer>
                <S.WorkspaceTitle> WORKSPACE_NAME </S.WorkspaceTitle>
                <S.Text> Boards </S.Text>
                <S.Boards>
                    <S.AddBoard
                        onClick={(ev) => {
                            setHidden((current) => !current);
                            setPosition([
                                ev.currentTarget.offsetTop - ev.currentTarget.offsetHeight,
                                ev.currentTarget.offsetLeft + ev.currentTarget.offsetWidth,
                            ]);
                        }}
                    >
                        <AiFillPlusCircle />
                    </S.AddBoard>
                    {boards.map((board) => (
                        <S.Board
                            key={board.id}
                            onClick={() => navigate(`/board/${board.id}`)}
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(false)}
                        >
                            <S.BoardHeader>
                                <S.BoardTitle> {board.title} </S.BoardTitle>
                                {isHover && (
                                    <S.Button>
                                        <AiFillDelete />
                                    </S.Button>
                                )}
                            </S.BoardHeader>
                            <S.BoardDetail> {board.description} </S.BoardDetail>
                        </S.Board>
                    ))}
                </S.Boards>
            </S.WorkspaceContainer>

            <S.PopoverSizeUp
                hidden={hidden}
                style={{
                    top: `${position[0]}px`,
                    left: `${position[1]}px`,
                }}
                right
            >
                <PopoverHeader right> Create Board </PopoverHeader>
                <S.PopoverBodyTitle right>Title</S.PopoverBodyTitle>
                <PopoverBody right>
                    <S.TitleTextArea placeholder="Board Title..." onChange={handleChangeTitle} />
                </PopoverBody>
                <S.PopoverBodyTitle right>Description</S.PopoverBodyTitle>
                <PopoverBody right>
                    <S.DescriptionTextArea
                        placeholder="Board Description..."
                        onChange={handleChangeDescription}
                    />
                </PopoverBody>
                <PopoverBody>
                    <S.CreateButton color="#5aac44" onClick={handleCreateBoard}>
                        Create Board
                    </S.CreateButton>
                    <S.CreateButton
                        color="#999999"
                        onClick={() => setHidden((current) => !current)}
                    >
                        Cancel
                    </S.CreateButton>
                </PopoverBody>
            </S.PopoverSizeUp>
        </>
    );
};

export default Workspace;
