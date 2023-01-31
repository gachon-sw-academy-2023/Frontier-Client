import { cardState } from "@/recoil/atom";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import * as S from "./styles";

interface AddCardProps {
    listId: string;
}

const AddCard = ({ listId }: AddCardProps) => {
    const setCard = useSetRecoilState(cardState);
    const [toggleAddCard, setToggleAddCard] = useState<boolean>(false);
    const [cardContents, setCardContents] = useState({ title: "", text: "" });

    const handleAddCard = () => {
        if (cardContents.title.length !== 0) {
            setCard((prev) => ({
                ...prev,
                [listId]: [
                    ...prev[listId],
                    { id: Date.now(), title: cardContents.title, text: cardContents.text },
                ],
            }));
            setCardContents({ title: "", text: "" });
            setToggleAddCard(false);
        }
    };

    const handleToggleAddCard = () => {
        setToggleAddCard((current) => !current);
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
            e.preventDefault();
            handleAddCard();
        }
    };

    return (
        <>
            {toggleAddCard ? (
                <div>
                    <S.EditCard>
                        <S.EditCardHeader>
                            <S.EditCardTitle>
                                <S.EditCardTextarea
                                    autoFocus
                                    value={cardContents.title}
                                    placeholder="Title"
                                    onChange={handleChangeTitle}
                                    onKeyDown={handleKeyPress}
                                />
                            </S.EditCardTitle>
                        </S.EditCardHeader>
                        <S.EditCardDetail>
                            <S.EditCardTextarea
                                autoFocus
                                value={cardContents.text}
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
                        <S.EditButton color="#999999" onClick={handleToggleAddCard}>
                            Cancel
                        </S.EditButton>
                    </S.EditButtons>
                </div>
            ) : (
                <S.ToggleAddCard onClick={handleToggleAddCard}> Click to add card </S.ToggleAddCard>
            )}
        </>
    );
};

export default AddCard;
