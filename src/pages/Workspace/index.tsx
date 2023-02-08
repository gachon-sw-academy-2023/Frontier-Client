/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import styled from "styled-components";
import LogoImg from "src/assets/images/Trello-Logo.png";
import { useNavigate } from "react-router-dom";
import { AiFillSetting } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { boardState } from "@/recoil/atom";
import ReactTextareaAutosize from "react-textarea-autosize";

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
    row-gap: 12px;
    margin-bottom: 24px;
`;

const Board = styled.div`
    height: 32px;
    width: 85%;
    background-color: rgb(40 130 200);
    border-radius: 4px;
    padding: 8px;
    font-weight: 600;
    color: white;
`;

const WorkspaceContainer = styled.div`
    padding: 36px 24px;
`;

const WorkspaceTitle = styled.div`
    font-size: 25px;
    line-height: 28px;
    margin-bottom: 12px;
`;

const Workspace = () => {
    const [boardTitle, setBoardTitle] = useState("");
    const [boards, setBoards] = useRecoilState(boardState);
    const navigate = useNavigate();
    const handleCreateBoard = () => {
        setBoards((prev) => ({
            ...prev,
            [boardTitle]: [],
        }));
        setBoardTitle("");
        console.log(`title: ${boardTitle}`);
    };
    const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBoardTitle(e.target.value);
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
                <ReactTextareaAutosize onChange={handleChangeTitle} />
                <button onClick={handleCreateBoard}> btn </button>
                <Boards>
                    {Object.keys(boards).map((board) => (
                        <Board key={board} onClick={() => navigate(`/board/${board}`)}>
                            {board}
                        </Board>
                    ))}
                </Boards>
            </WorkspaceContainer>
        </>
    );
};

export default Workspace;
