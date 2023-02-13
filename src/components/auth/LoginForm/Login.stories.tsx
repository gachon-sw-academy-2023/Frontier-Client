import React from "react";
import { Meta, Story } from "@storybook/react";
import LoginFormButton from "@/components/auth/LoginForm/LoginFormButton";

export default {
    title: "components/LoginForm",
    component: LoginFormButton,
} as Meta<typeof LoginFormButton>;

const LoginButtonTemplate: Story<typeof LoginFormButton> = (args) => (
    <LoginFormButton color="" disabled={false} contents="" type="button" {...args} />
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
