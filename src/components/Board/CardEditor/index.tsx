import { CardInterface } from "@/interfaces/cardInterface";
import { cardState } from "@/recoil/atom";
// eslint-disable-next-line import/no-extraneous-dependencies
import dayjs from "dayjs";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useSetRecoilState } from "recoil";
import S from "./styles";

interface CardEditorProps {
    setEditable: Dispatch<SetStateAction<boolean>>;
    listId: string;
    cardDetail: CardInterface;
}

const CardEditor = ({ setEditable, listId, cardDetail }: CardEditorProps) => {
    const setCard = useSetRecoilState(cardState);
    const [cardContents, setCardContents] = useState({ title: "", text: "" });

    const handleAddCard = () => {
        if (cardContents.title.length !== 0) {
            setCard((prev) => ({
                ...prev,
                [listId]: [
                    ...prev[listId],
                    {
                        id: Date.now(),
                        title: cardContents.title,
                        text: cardContents.text,
                        date: dayjs().format("YYYY-MM-DD"),
                    },
                ],
            }));
            setCardContents({ title: "", text: "" });
        }
    };

    const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCardContents((prev) => ({
            ...prev,
            title: e.target.value,
        }));
    };

    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCardContents((prev) => ({
            ...prev,
            text: e.target.value,
        }));
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            handleAddCard();
        }
    };
    return (
        <>
            <S.EditCard>
                <S.EditCardHeader>
                    <S.EditCardTitle>
                        <S.EditCardTextarea
                            autoFocus
                            value={cardDetail.title}
                            placeholder="Title"
                            onChange={handleChangeTitle}
                            onKeyDown={handleKeyPress}
                        />
                    </S.EditCardTitle>
                </S.EditCardHeader>
                <S.EditCardDetail>
                    <S.EditCardTextarea
                        autoFocus
                        value={cardDetail.text}
                        placeholder="Card text"
                        onChange={handleChangeText}
                        onKeyDown={handleKeyPress}
                    />
                </S.EditCardDetail>
            </S.EditCard>
            <S.EditButtons>
                <S.EditButton color="#5aac44" onClick={handleAddCard}>
                    Add Card
                </S.EditButton>
                <S.EditButton color="#999999" onClick={() => setEditable(false)}>
                    Cancel
                </S.EditButton>
            </S.EditButtons>
        </>
    );
};

export default CardEditor;
