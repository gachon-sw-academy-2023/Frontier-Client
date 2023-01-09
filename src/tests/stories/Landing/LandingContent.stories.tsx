import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LandingContent from "@/pages/Landing/LandingContent";

export default {
    title: "Button",
    component: LandingContent,
} as ComponentMeta<typeof LandingContent>;

export const Primary: ComponentStory<typeof LandingContent> = () => {
    return <LandingContent />;
};
