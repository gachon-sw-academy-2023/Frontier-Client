import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import Navbar from "@/components/Navbar/index";

export default {
    title: "components/Navbar",
    component: Navbar,
};

export const Navigation = () => (
    <Router>
        <Navbar />
    </Router>
);
