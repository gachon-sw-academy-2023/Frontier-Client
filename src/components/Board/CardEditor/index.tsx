import { cardState, ICard } from "@/recoil/atom";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useSetRecoilState } from "recoil";
import S from "./styles";

interface CardEditorProps {
    setEditable: Dispatch<SetStateAction<boolean>>;
    boardId: string;
    listId: string;
    cardDetail: ICard;
}

const CardEditor = ({ setEditable, boardId, listId, cardDetail }: CardEditorProps) => {
    const setCards = useSetRecoilState(cardState(boardId));
    const [cardContents, setCardContents] = useState({
        title: cardDetail.title,
        text: cardDetail.text,
    });

    const handleEditCard = () => {
        if (cardContents.title.length !== 0) {
            setCards((prev) => {
                const copyList = [...prev[listId]];
                const findIndex = copyList.findIndex((card) => card.id === cardDetail.id);
                copyList[findIndex] = {
                    id: cardDetail.id,
                    title: cardContents.title,
                    text: cardContents.text,
                    date: cardDetail.date,
                };
                // console.log(updateCard);
                return {
                    ...prev,
                    [listId]: copyList,
                    // [listId]: updateCard,
                };
            });
            setEditable(false);
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
            handleEditCard();
        }
    };
    return (
        <>
            <S.EditCard isDragging={false}>
                <S.EditCardHeader>
                    <S.EditCardTitle>
                        <S.EditCardTextarea
                            autoFocus
                            value={cardContents.title}
                            placeholder={cardDetail.title}
                            onChange={handleChangeTitle}
                            onKeyDown={handleKeyPress}
                        />
                    </S.EditCardTitle>
                </S.EditCardHeader>
                <S.EditCardDetail>
                    <S.EditCardTextarea
                        autoFocus
                        value={cardContents.text}
                        placeholder={cardDetail.text}
                        onChange={handleChangeText}
                        onKeyDown={handleKeyPress}
                    />
                </S.EditCardDetail>
            </S.EditCard>
            <S.EditButtons>
                <S.EditButton color="#5aac44" onClick={handleEditCard}>
                    Edit Card
                </S.EditButton>
                <S.EditButton color="#999999" onClick={() => setEditable(false)}>
                    Cancel
                </S.EditButton>
            </S.EditButtons>
        </>
    );
};

export default CardEditor;
