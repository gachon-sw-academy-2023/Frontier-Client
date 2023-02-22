import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MemoryRouter as Router } from "react-router-dom";
import Footer from "@/pages/Landing/Footer";

export default {
    title: "Landing/Footer",
    component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => (
    <Router>
        <Footer />
    </Router>
);

export const Default = Template.bind({});
