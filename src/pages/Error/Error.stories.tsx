import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Error from "@/pages/Error";

export default {
    title: "Error/Error",
    component: Error,
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const Default = Template.bind({ code: 500, message: "Server is Down" });
