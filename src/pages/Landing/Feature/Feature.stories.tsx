import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MemoryRouter as Router } from "react-router-dom";
import Feature from "@/pages/Landing/Feature";

export default {
    title: "Landing/Feature",
    component: Feature,
} as ComponentMeta<typeof Feature>;

const Template: ComponentStory<typeof Feature> = () => (
    <Router>
        <Feature />
    </Router>
);

export const Default = Template.bind({});
