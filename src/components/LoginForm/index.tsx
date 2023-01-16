import S from "./styles";

const LoginForm = () => {
    return (
        <S.InputContainer>
            <S.Input
                type="text"
                id="userId"
                placeholder="Email"
                maxLength={20}
                autoComplete="off"
            />
            <S.Input type="text" id="userPW" placeholder="PW" maxLength={20} autoComplete="off" />
            <S.Button> 로그인 </S.Button>
        </S.InputContainer>
    );
};

export default LoginForm;
