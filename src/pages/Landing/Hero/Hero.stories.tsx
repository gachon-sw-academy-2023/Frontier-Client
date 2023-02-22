import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MemoryRouter as Router } from "react-router-dom";
import Hero from "@/pages/Landing/Hero";

export default {
    title: "Landing/Hero",
    component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = () => (
    <Router>
        <Hero />
    </Router>
);

export const Default = Template.bind({});
