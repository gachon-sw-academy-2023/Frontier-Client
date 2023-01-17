import S from "./styles";

const RegisterFrom = () => {
    return (
        <S.InputContainer>
            <p className="text-lg font-bold text-center mb-5"> Sign up for your account </p>
            <S.Input
                type="text"
                id="userName"
                placeholder="Name"
                maxLength={20}
                autoComplete="off"
            />
            <S.Input
                type="text"
                id="userEmail"
                placeholder="Email"
                maxLength={20}
                autoComplete="off"
            />
            <S.Input
                type="text"
                id="userPassword"
                placeholder="Password"
                maxLength={20}
                autoComplete="off"
            />
            <S.Button> 회원가입 </S.Button>
        </S.InputContainer>
    );
};

export default RegisterFrom;
