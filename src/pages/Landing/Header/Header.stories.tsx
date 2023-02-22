import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MemoryRouter as Router } from "react-router-dom";
import Header from "@/pages/Landing/Header";

export default {
    title: "Landing/Header",
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => (
    <Router>
        <Header />
    </Router>
);

export const Default = Template.bind({});
