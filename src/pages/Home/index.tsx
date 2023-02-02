import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
// import { CgBoard } from "react-icons/cg";
// import { CiHome } from "react-icons/ci";
// import { useState } from "react";
import Box from "@/components/BoardCard";
import HC from "./styles";
import axios from "axios";

const Home = () => {
    
    const [workspace, setWorkspace] = useState("")
    const [board, setBoard] = useState([]);
    useEffect(() => {
        axios.get('/workspaces')
        .then((response) => {
            setWorkspace(response.data.workspacename);
            setBoard(response.data.Boards)});
    }, []);

    return (
    <HC.Home>
        <Navbar />
        <HC.HomeBody>
            <HC.HomeSide>
                <HC.SideTop>
                    <HC.SideButton>
                        {/* <CgBoard> */}
                        Board
                    </HC.SideButton>
                    <HC.SideButton>
                        {/* <CiHome /> */}
                        Home
                    </HC.SideButton>
                </HC.SideTop>
                <HC.SideBottom>
                    <HC.SideContent color="gray">
                        <div>WorkSpace</div>
                        <button type="button" className="add_workspace">
                            +
                        </button>
                    </HC.SideContent>
                    <HC.SideButton>
                        WorkSpace1
                    </HC.SideButton>
                    <HC.SideButton>
                        WorkSpace2
                    </HC.SideButton>
                </HC.SideBottom>
            </HC.HomeSide>
            <HC.HomeContent>
                <HC.HomeH1>MY WORKSPACE</HC.HomeH1>
                <HC.HomeWorkspace>
                    <h3>{workspace}</h3>
                    <HC.HomeBox>
                        {board.map(board => {
                            return (<Box {...board} />)
                        })}
                    </HC.HomeBox>
                </HC.HomeWorkspace>
                <HC.HomeWorkspace>
                    <h3>Workspace2</h3>
                    <HC.HomeBox>
                        {board.map(board => {
                            return (<Box {...board} />)
                        })}
                    </HC.HomeBox>
                </HC.HomeWorkspace>
                <HC.HomeWorkspace>
                    <h3>Workspace3</h3>
                    <HC.HomeBox>
                        {board.map(board => {
                            return (<Box {...board} />)
                        })}
                    </HC.HomeBox>
                </HC.HomeWorkspace>
            </HC.HomeContent>
        </HC.HomeBody>
    </HC.Home>
    );  
};

export default Home;
