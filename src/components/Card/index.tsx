/* eslint-disable react/jsx-props-no-spreading */
import { CardInterface, cardState } from "@/recoil/atom";
import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { useSetRecoilState } from "recoil";
import S from "./styles";

interface CardProps {
    cardDetail: CardInterface;
    listId: string;
    index: number;
}

const Card = ({ cardDetail, index, listId }: CardProps) => {
    const setCards = useSetRecoilState(cardState);
    const [isHover, setIsHover] = useState<boolean>(false);

    const startHover = () => {
        setIsHover(true);
    };
    const endHover = () => {
        setIsHover(false);
    };

    const handleDelete = (cardId: number) => {
        setCards((prev) => {
            const listCopy: CardInterface[] = [...prev[listId]];
            const filterDelete: CardInterface[] = listCopy.filter((card) => card.id !== cardId);
            return { ...prev, [listId]: filterDelete };
        });
    };

    const handleEdit = () => {
        console.log("Edit");
    };

    return (
        <Draggable draggableId={cardDetail.id.toString()} index={index}>
            {(provided) => (
                <S.Card
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    onMouseEnter={startHover}
                    onMouseLeave={endHover}
                >
                    <S.CardHeader>
                        <S.CardTitle> {cardDetail.title} </S.CardTitle>
                        <S.CardDate> {cardDetail.date} </S.CardDate>
                        {isHover && (
                            <div>
                                <S.HoverButton onClick={handleEdit}>
                                    <FaEdit />
                                </S.HoverButton>
                                <S.HoverButton
                                    onClick={() => {
                                        handleDelete(cardDetail.id);
                                    }}
                                >
                                    <AiTwotoneDelete />
                                </S.HoverButton>
                            </div>
                        )}
                    </S.CardHeader>
                    <S.CardDetail>{cardDetail.text}</S.CardDetail>
                </S.Card>
            )}
        </Draggable>
    );
};

export default Card;
