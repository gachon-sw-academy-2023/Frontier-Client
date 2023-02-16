import { FaTrello } from "react-icons/fa";
import Description from "@/pages/Card/Content/Description";
import Members from "@/pages/Card/Content/Members";
import Labels from "@/pages/Card/Content/Labels";
import * as S from "@/pages/Card/Content/styles";

const CardContent = () => {
    const contents = [
        {
            title: "Description",
            icon: <FaTrello />,
            content: <Description />,
        },
        {
            title: "Members",
            icon: <FaTrello />,
            content: <Members />,
        },
        {
            title: "Labels",
            icon: <FaTrello />,
            content: <Labels />,
        },
        {
            title: "Attachment",
            icon: <FaTrello />,
            content: <S.ContentBody />,
        },
        {
            title: "Checklist",
            icon: <FaTrello />,
            content: <S.ContentBody />,
        },
        {
            title: "Dates",
            icon: <FaTrello />,
            content: <S.ContentBody />,
        },
        {
            title: "Markdown",
            icon: <FaTrello />,
            content: <S.ContentBody />,
        },
        {
            title: "Activity",
            icon: <FaTrello />,
            content: <S.ContentBody />,
        },
    ];

    return (
        <S.ContentWrapper>
            {contents.map((v) => (
                <>
                    <S.ContentTitle>
                        {v.icon}
                        {v.title}
                    </S.ContentTitle>
                    {v.content}
                </>
            ))}
        </S.ContentWrapper>
    );
};

export default CardContent;
