import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AddList from "@/components/Board/AddList";

export default {
  title: "Board/AddList",
  component: AddList,
} as ComponentMeta<typeof AddList>;

const Template: ComponentStory<typeof AddList> = () => <AddList boardId="123" />;

export const Default = Template.bind({});
