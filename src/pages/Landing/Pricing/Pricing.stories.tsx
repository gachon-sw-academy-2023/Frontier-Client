import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MemoryRouter as Router } from "react-router-dom";
import Pricing from "@/pages/Landing/Pricing";

export default {
    title: "Landing/Pricing",
    component: Pricing,
} as ComponentMeta<typeof Pricing>;

const Template: ComponentStory<typeof Pricing> = () => (
    <Router>
        <Pricing />
    </Router>
);

export const Default = Template.bind({});
