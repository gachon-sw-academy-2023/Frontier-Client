import * as S from "@/components/CardModal/Sidebar/Sidebar.styles";
import { FaTrello } from "react-icons/fa";

const CardSidebar = () => {
    const buttons = [
        {
            type: "ADD",
            title: "Members",
            icon: <FaTrello />,
            active: true,
        },
        {
            type: "ADD",
            title: "Labels",
            icon: <FaTrello />,
            active: true,
        },
        {
            type: "ADD",
            title: "Attachment",
            icon: <FaTrello />,
            active: true,
        },
        {
            type: "ADD",
            title: "Checklist",
            icon: <FaTrello />,
            active: true,
        },
        {
            type: "ADD",
            title: "Dates",
            icon: <FaTrello />,
            active: true,
        },
        {
            type: "ADD",
            title: "Markdown",
            icon: <FaTrello />,
            active: true,
        },
        {
            type: "ELSE",
            title: "Move",
            icon: <FaTrello />,
            active: true,
        },
        {
            type: "ELSE",
            title: "Delete",
            icon: <FaTrello />,
            active: true,
        },
        {
            type: "ELSE",
            title: "Share",
            icon: <FaTrello />,
            active: true,
        },
    ];

    return (
        <S.SidebarWrapper>
            <S.ActionDescription>Add to Card</S.ActionDescription>
            {buttons
                .filter((v) => v.type === "ADD")
                .map((v) => (
                    <S.ActionButton active={v.active}>
                        <S.ActionIcon>{v.icon}</S.ActionIcon>
                        {v.title}
                    </S.ActionButton>
                ))}
            <S.ActionDescription>Actions</S.ActionDescription>
            {buttons
                .filter((v) => v.type === "ELSE")
                .map((v) => (
                    <S.ActionButton active={v.active}>
                        <S.ActionIcon>{v.icon}</S.ActionIcon>
                        {v.title}
                    </S.ActionButton>
                ))}
        </S.SidebarWrapper>
    );
};

export default CardSidebar;
