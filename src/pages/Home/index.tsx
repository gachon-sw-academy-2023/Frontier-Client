import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Box from "@/components/Workspace/Box";
import axios from "axios";
import HC from "./styles";

const Home = () => {
    const [board1, setBoard1] = useState([]);
    const [board2, setBoard2] = useState([]);
    useEffect(() => {
        axios.get("/boards/one").then((response) => {
            setBoard1(response.data);
        });
        axios.get("/boards/two").then((response) => {
            setBoard2(response.data);
        });
    }, []);

    return (
        <HC.Home>
            <Navbar />
            <HC.HomeBody>
                <Sidebar />
                <HC.HomeContent>
                    <HC.HomeH1>MY WORKSPACE</HC.HomeH1>
                    <HC.HomeWorkspace>
                        <h3>Workspace test</h3>
                        <HC.HomeBox>
                            {board1.map((boards1) => (
                                <Box key={boards1.id} {...boards1} />
                            ))}
                        </HC.HomeBox>
                    </HC.HomeWorkspace>
                    <HC.HomeWorkspace>
                        <h3>Workspace front</h3>
                        <HC.HomeBox>
                            {board2.map((boards2) => (
                                <Box key={boards2.id} {...boards2} />
                            ))}
                        </HC.HomeBox>
                    </HC.HomeWorkspace>
                    <HC.HomeWorkspace>
                        <h3>Workspace front</h3>
                        <HC.HomeBox>
                            {board2.map((boards2) => (
                                <Box key={boards2.id} {...boards2} />
                            ))}
                        </HC.HomeBox>
                    </HC.HomeWorkspace>
                    <HC.HomeWorkspace>
                        <h3>Workspace front</h3>
                        <HC.HomeBox>
                            {board2.map((boards2) => (
                                <Box key={boards2.id} {...boards2} />
                            ))}
                        </HC.HomeBox>
                    </HC.HomeWorkspace>
                </HC.HomeContent>
            </HC.HomeBody>
        </HC.Home>
    );
};

export default Home;
