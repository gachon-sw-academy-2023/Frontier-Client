import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ListEditor from "@/components/Board/ListEditor";

export default {
  title: "Board/ListEditor",
  component: ListEditor,
} as ComponentMeta<typeof ListEditor>;

const Template: ComponentStory<typeof ListEditor> = (args) => <ListEditor {...args} />;

export const Editable = Template.bind({ listId: "123", boardId: "123", editable: true });

export const Blocked = Template.bind({ listId: "123", boardId: "123" });
