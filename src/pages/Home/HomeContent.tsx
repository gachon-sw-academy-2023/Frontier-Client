import React from "react";
import Navbar from "@/components/Navbar";
// import { CgBoard } from "react-icons/cg";
// import { CiHome } from "react-icons/ci";
// import { useState } from "react";
import HC from "./styles";

const HomeContent = () => {
    // const [bar, setBar] = useState(0);

    // const openSidebar = () => {
    //     setBar(240);
    //     console.log(bar);
    // };

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
                        <HC.SideContent fsize="13px" color="gray">
                            <div>WorkSpace</div>
                            <button type="button" className="add_workspace">
                                +
                            </button>
                        </HC.SideContent>
                        <HC.SideContent>
                            <div>WorkSpace1</div>
                            <div>&#9661;</div>
                        </HC.SideContent>
                        <HC.SideContent>
                            <div>WorkSpace2</div>
                            <div>&#9661;</div>
                        </HC.SideContent>
                    </HC.SideBottom>
                </HC.HomeSide>
                <HC.HomeContent>
                    <HC.HomeWorkspace>
                        <h3>Workspace1</h3>
                        <HC.HomeBox>
                            <box>board1</box>
                            <box>board2</box>
                            <box>board3</box>
                        </HC.HomeBox>
                    </HC.HomeWorkspace>
                    <HC.HomeWorkspace>
                        <h3>Workspace2</h3>
                        <HC.HomeBox>
                            <box>board1</box>
                            <box>board2</box>
                            <box>board3</box>
                        </HC.HomeBox>
                    </HC.HomeWorkspace>
                    <HC.HomeWorkspace>
                        <h3>Workspace3</h3>
                        <HC.HomeBox>
                            <box>board1</box>
                            <box>board2</box>
                            <box>board3</box>
                        </HC.HomeBox>
                    </HC.HomeWorkspace>
                </HC.HomeContent>
            </HC.HomeBody>
        </HC.Home>
    );
};

export default HomeContent;
