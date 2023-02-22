import React, { useState } from "react";
import { IBoard, workspaceState } from "@/recoil/atom";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import S from "./styles";

interface BoardBoxProps {
    boardDetail: IBoard;
    workspaceId: string;
}

const BoardBox = ({ boardDetail, workspaceId }: BoardBoxProps) => {
    const navigate = useNavigate();
    const setWorkspaces = useSetRecoilState(workspaceState);
    const [isHover, setIsHover] = useState<boolean>(false);

    const handleDeleteBoard = (boardId: number) => {
        setWorkspaces((prev) => {
            const copyWorkspace = [...prev[workspaceId]];
            const filterDeleted = copyWorkspace.filter((board) => board.id !== boardId);
            return { ...prev, [workspaceId]: filterDeleted };
        });
    };

    return (
        <S.Board
            onClick={() =>
                navigate(`boards/${boardDetail.id}`, {
                    state: {
                        boardId: boardDetail.id,
                    },
                })
            }
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <S.BoardHeader>
                <S.BoardTitle> {boardDetail.title} </S.BoardTitle>
                {isHover && (
                    <S.Button
                        onClick={(event) => {
                            event.stopPropagation();
                            handleDeleteBoard(boardDetail.id);
                        }}
                    >
                        <AiFillDelete />
                    </S.Button>
                )}
            </S.BoardHeader>
            <S.BoardDetail> {boardDetail.description} </S.BoardDetail>
        </S.Board>
    );
};

export default BoardBox;
