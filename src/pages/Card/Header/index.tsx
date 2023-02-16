import * as S from "@/pages/Card/Header/Header.styles";

const CardHeader = () => {
    const data = { title: "Card Title", listName: 3 };

    return (
        <S.HeaderWrapper>
            <S.HeaderTitle>{data.title}</S.HeaderTitle>
            <div>in List {data.listName}</div>
        </S.HeaderWrapper>
    );
};

export default CardHeader;
