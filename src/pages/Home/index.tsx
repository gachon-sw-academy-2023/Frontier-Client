import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Box from "@/components/Workspace/Box";
import { useRecoilState } from "recoil";
import { workspaceState } from "@/recoil/atom";
import { AiFillPlusCircle } from "react-icons/ai";
import { PopoverBody, PopoverHeader } from "styled-popover-component";
import dayjs from "dayjs";
import HC from "./styles";

const Home = () => {
    const [workspaces, setWorkspaces] = useRecoilState(workspaceState);
    const [hidden, setHidden] = useState(true);
    const [position, setPosition] = useState([0, 0]);
    const [boardTitle, setBoardTitle] = useState("");
    const [boardDescription, setBoardDescription] = useState("");
    const [selectedWorkspaceId, setSelectedWorkspaceId] = useState("");

    const handleCreateBoard = (workspaceId: string) => {
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
        setHidden(true);
    };

    const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBoardTitle(e.target.value);
    };

    const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBoardDescription(e.target.value);
    };

    return (
        <HC.Home>
            <Navbar />
            <HC.HomeBody>
                <Sidebar />
                <HC.HomeContent>
                    <HC.HomeH1>MY WORKSPACE</HC.HomeH1>
                    {Object.keys(workspaces).map((workspaceId) => (
                        <HC.HomeWorkspace key={workspaceId}>
                            <HC.WorkspaceTitle>{workspaceId}</HC.WorkspaceTitle>
                            <HC.HomeBox>
                                <HC.AddBoardBox
                                    onClick={(ev) => {
                                        setSelectedWorkspaceId(workspaceId);
                                        setHidden((current) => !current);
                                        setPosition([
                                            ev.currentTarget.offsetTop -
                                                ev.currentTarget.offsetHeight,
                                            ev.currentTarget.offsetLeft +
                                                ev.currentTarget.offsetWidth,
                                        ]);
                                    }}
                                >
                                    <AiFillPlusCircle />
                                </HC.AddBoardBox>
                                {workspaces[workspaceId].map((board) => (
                                    <Box
                                        key={board.id}
                                        boardDetail={board}
                                        workspaceId={workspaceId}
                                    />
                                ))}
                            </HC.HomeBox>
                        </HC.HomeWorkspace>
                    ))}
                </HC.HomeContent>
            </HC.HomeBody>

            <HC.PopoverSizeUp
                hidden={hidden}
                style={{
                    top: `${position[0]}px`,
                    left: `${position[1]}px`,
                }}
                right
            >
                <PopoverHeader right> Create Board </PopoverHeader>
                <HC.PopoverBodyTitle right>Title</HC.PopoverBodyTitle>
                <PopoverBody right>
                    <HC.TitleTextArea placeholder="Board Title..." onChange={handleChangeTitle} />
                </PopoverBody>
                <HC.PopoverBodyTitle right>Description</HC.PopoverBodyTitle>
                <PopoverBody right>
                    <HC.DescriptionTextArea
                        placeholder="Board Description..."
                        onChange={handleChangeDescription}
                    />
                </PopoverBody>
                <PopoverBody>
                    <HC.CreateButton
                        color="#5aac44"
                        onClick={() => {
                            handleCreateBoard(selectedWorkspaceId);
                        }}
                    >
                        Create Board
                    </HC.CreateButton>
                    <HC.CreateButton
                        color="#999999"
                        onClick={() => setHidden((current) => !current)}
                    >
                        Cancel
                    </HC.CreateButton>
                </PopoverBody>
            </HC.PopoverSizeUp>
        </HC.Home>
    );
};

export default Home;
