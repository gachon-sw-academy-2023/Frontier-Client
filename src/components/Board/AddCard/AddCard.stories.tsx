import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AddCard from "@/components/Board/AddCard";

export default {
    title: "Board/AddCard",
    component: AddCard,
} as ComponentMeta<typeof AddCard>;

const Template: ComponentStory<typeof AddCard> = (args) => <AddCard {...args} />;

export const Editable = Template.bind({ listId: "123", boardId: "123", editable: true });

export const Blocked = Template.bind({ listId: "123", boardId: "123" });
