import { useNavigate } from "react-router-dom";
import { IBoard } from "@/recoil/atom";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import S from "./styles";

interface BoxProps {
    boardDetail: IBoard;
    workspaceId: string;
}

const WorkspaceBox = ({ boardDetail, workspaceId }: BoxProps) => {
    const navigate = useNavigate();
    const [isHover, setIsHover] = useState(false);
    return (
        <S.Board
            key={boardDetail.id}
            onClick={() =>
                navigate(`workspaces/${workspaceId}/boards/${boardDetail.id}`, {
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
                    <S.Button>
                        <AiFillDelete />
                    </S.Button>
                )}
            </S.BoardHeader>
            <S.BoardDetail> {boardDetail.description} </S.BoardDetail>
        </S.Board>
    );
};

export default WorkspaceBox;
