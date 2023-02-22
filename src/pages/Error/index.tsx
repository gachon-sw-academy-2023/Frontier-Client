import * as S from "@/pages/Error/Error.styles";

const Error = ({ code, message }: { code: number; message: string }) => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <S.ErrorContainer>
            <S.ErrorCard>
                <S.ErrorCode>{code}</S.ErrorCode>
                <S.ErrorMessage>{message}</S.ErrorMessage>
                <S.GoBackButton onClick={handleGoBack}>Go Back</S.GoBackButton>
            </S.ErrorCard>
        </S.ErrorContainer>
    );
};

export default Error;
