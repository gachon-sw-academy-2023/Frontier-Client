import * as S from "@/components/CardModal/Content/Labels.styles";

const Labels = () => {
    const data = [
        {
            isChecked: true,
            color: "red",
            title: "Red Color",
        },
        {
            isChecked: true,
            color: "yellow",
            title: "Yellow Color",
        },
        {
            isChecked: true,
            color: "green",
            title: "Green Color",
        },
        {
            isChecked: true,
            color: "blue",
            title: "Blue Color",
        },
    ];

    return (
        <S.LabelWrapper>
            {data.map((v) => (
                <S.Label>
                    <S.LabelIcon color={v.color} />
                    <S.LabelName color={v.color}>{v.title}</S.LabelName>
                </S.Label>
            ))}
            <S.PlusIcon />
        </S.LabelWrapper>
    );
};

export default Labels;
