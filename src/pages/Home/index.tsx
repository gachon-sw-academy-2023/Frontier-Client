import React from "react";
import Navbar from "@/components/Navbar";
// import { CgBoard } from "react-icons/cg";
// import { CiHome } from "react-icons/ci";
// import { useState } from "react";
import Box from "@/components/BoardCard";
import HC from "./styles";

const Home = () => (
    // const [bar, setBar] = useState(0);

    // const openSidebar = () => {
    //     setBar(240);
    //     console.log(bar);
    // };

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
                    <HC.SideContent fsize="13px" color="gray">
                        <div>WorkSpace</div>
                        <button type="button" className="add_workspace">
                            +
                        </button>
                    </HC.SideContent>
                    <HC.SideButton>
                        <div>WorkSpace1</div>
                        <div>&#9661;</div>
                    </HC.SideButton>
                    <HC.SideButton>
                        <div>WorkSpace2</div>
                        <div>&#9661;</div>
                    </HC.SideButton>
                </HC.SideBottom>
            </HC.HomeSide>
            <HC.HomeContent>
                <HC.HomeH1>MY WORKSPACE</HC.HomeH1>
                <HC.HomeWorkspace>
                    <h3>Workspace1</h3>
                    <HC.HomeBox>
                        <Box />
                    </HC.HomeBox>
                </HC.HomeWorkspace>
                <HC.HomeWorkspace>
                    <h3>Workspace2</h3>
                    <HC.HomeBox>
                        <Box />
                        <Box />
                    </HC.HomeBox>
                </HC.HomeWorkspace>
                <HC.HomeWorkspace>
                    <h3>Workspace3</h3>
                    <HC.HomeBox>
                        <Box />
                        <Box />
                        <Box />
                    </HC.HomeBox>
                </HC.HomeWorkspace>
            </HC.HomeContent>
        </HC.HomeBody>
    </HC.Home>
);
export default Home;
