import * as S from "@/components/CardModal/Content/Members.styles";

const Members = () => {
    const data = [
        { name: "Jo Byeong Wook " },
        { name: "Jo Byeong Wook " },
        { name: "Jo Byeong Wook " },
    ];

    return (
        <S.MemberWrapper>
            {data.map((v) => (
                <S.Member>
                    <S.MemberIcon />
                    <S.MemberName>{v.name}</S.MemberName>
                </S.Member>
            ))}
            <S.PlusIcon />
        </S.MemberWrapper>
    );
};

export default Members;
