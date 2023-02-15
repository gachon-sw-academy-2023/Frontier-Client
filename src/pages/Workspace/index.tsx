/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { workspaceState } from "@/recoil/atom";
import { PopoverBody, PopoverHeader } from "styled-popover-component";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import dayjs from "dayjs";
import BoardBox from "@/components/BoardBox";
import S from "./styles";

const Workspace = () => {
    const location = useLocation();
    const { workspaceId } = location.state;
    const [workspaces, setWorkspaces] = useRecoilState(workspaceState);

    const [boardTitle, setBoardTitle] = useState("");
    const [boardDescription, setBoardDescription] = useState("");
    const [hidden, setHidden] = useState(true);
    const [position, setPosition] = useState([0, 0]);

    const handleCreateBoard = () => {
        if (boardTitle.length !== 0) {
            setWorkspaces((prev) => ({
                ...prev,
                [workspaceId]: [
                    ...prev[workspaceId],
                    {
                        id: Date.now(),
                        title: boardTitle,
                        description: boardDescription,
                        date: dayjs().format("YYYY-MM-DD"),
                    },
                ],
            }));
        }
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
        <S.WorkspaceWrapper>
            <Navbar />
            <Sidebar />
            <S.WorkspaceContainer>
                <S.WorkspaceTitle>
                    {Object.keys(workspaces).filter((workspace) => workspace === workspaceId)}
                </S.WorkspaceTitle>
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
                    {workspaceId &&
                        workspaces[workspaceId].map((board) => (
                            <BoardBox
                                key={board.id}
                                boardDetail={board}
                                workspaceId={workspaceId}
                            />
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
        </S.WorkspaceWrapper>
    );
};

export default Workspace;
