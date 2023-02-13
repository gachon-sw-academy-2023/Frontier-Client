import S from "./LoginForm/styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color: string;
    type: "button" | "submit" | "reset";
    disabled: boolean;
    contents: string;
}

const AuthButton = ({ color, type, disabled, contents }: ButtonProps) => (
    <S.Button color={color} type={type} disabled={disabled}>
        {contents}
    </S.Button>
);

export default AuthButton;
