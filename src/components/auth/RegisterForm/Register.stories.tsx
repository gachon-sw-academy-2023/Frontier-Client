import React from "react";
import { Meta, Story } from "@storybook/react";
import AuthButton from "@/components/auth/AuthButton";

export default {
    title: "components/RegisterForm",
    component: AuthButton,
} as Meta<typeof AuthButton>;

const RegisterButtonTemplate: Story<typeof AuthButton> = (args) => (
    <AuthButton color="" disabled={false} contents="" type="button" {...args} />
);

export const Default = RegisterButtonTemplate.bind({});
Default.args = {
    color: "",
    type: "button",
    disabled: false,
    contents: "",
};

export const Register = RegisterButtonTemplate.bind({});
Register.args = {
    color: "#1e90ff",
    type: "button",
    disabled: false,
    contents: "회원가입",
};
