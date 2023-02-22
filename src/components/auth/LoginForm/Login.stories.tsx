import React from "react";
import { Meta, Story } from "@storybook/react";
import AuthButton from "@/components/auth/AuthButton";

export default {
    title: "components/LoginForm",
    component: AuthButton,
} as Meta<typeof AuthButton>;

const LoginButtonTemplate: Story<typeof AuthButton> = (args) => (
    <AuthButton color="" disabled={false} contents="" type="button" {...args} />
);

export const Default = LoginButtonTemplate.bind({});
Default.args = {
    color: "",
    type: "button",
    disabled: false,
    contents: "",
};

export const Login = LoginButtonTemplate.bind({});
Login.args = {
    color: "#1e90ff",
    type: "submit",
    disabled: false,
    contents: "Login",
};

export const WithGoogle = LoginButtonTemplate.bind({});
WithGoogle.args = {
    color: "#ff0000",
    type: "button",
    disabled: false,
    contents: "Continew with Google",
};
