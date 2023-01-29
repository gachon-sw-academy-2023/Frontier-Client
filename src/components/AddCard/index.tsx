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
    const [cardText, setCardText] = useState("");

    const handleAddCard = () => {
        if (cardText.length !== 0) {
            setCard((prev) => {
                return {
                    ...prev,
                    [listId]: [...prev[listId], { id: Date.now(), text: cardText }],
                };
            });
            setCardText("");
            setToggleAddCard(false);
        }
    };

    const handleToggleAddCard = () => {
        setToggleAddCard((current) => {
            return !current;
        });
    };

    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCardText(e.target.value);
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
                        <S.EditCardTextarea
                            autoFocus
                            value={cardText}
                            placeholder="Enter the text for this card..."
                            onChange={handleChangeText}
                            onKeyDown={handleKeyPress}
                        />
                    </S.EditCard>
                    <S.EditButtons>
                        <S.EditButton color="#5aac44" onClick={handleAddCard}>
                            Add Card
                        </S.EditButton>
                        <S.EditButtonCancel onClick={handleToggleAddCard}>
                            Cancel
                        </S.EditButtonCancel>
                    </S.EditButtons>
                </div>
            ) : (
                <S.ToggleAddCard onClick={handleToggleAddCard}> Add a Card </S.ToggleAddCard>
            )}
        </>
    );
};

export default AddCard;
