/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { cardState } from "@/recoil/atom";
import { useSetRecoilState } from "recoil";
import { CardInterface } from "@/interfaces/cardInterface";
import { Draggable } from "react-beautiful-dnd";
import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import CardEditor from "../CardEditor";
import S from "./styles";

interface CardProps {
    cardDetail: CardInterface;
    listId: string;
    index: number;
}

const Card = ({ cardDetail, index, listId }: CardProps) => {
    const setCards = useSetRecoilState(cardState);
    const [editable, setEditable] = useState<boolean>(false);
    const [isHover, setIsHover] = useState<boolean>(false);

    const handleDelete = (cardId: number) => {
        setCards((prev) => {
            const listCopy = [...prev[listId]];
            const filterDelete = listCopy.filter((card) => card.id !== cardId);
            return { ...prev, [listId]: filterDelete };
        });
    };

    const handleToggleEditable = () => {
        setEditable((current) => !current);
    };

    if (!editable) {
        return (
            <Draggable draggableId={cardDetail.id.toString()} index={index}>
                {(provided, snapshot) => (
                    <S.Card
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                        isDragging={snapshot.isDragging}
                    >
                        <S.CardHeader>
                            <S.CardTitle> {cardDetail.title} </S.CardTitle>
                            <S.CardDate> {cardDetail.date} </S.CardDate>
                            {isHover && (
                                <>
                                    <S.HoverButton onClick={handleToggleEditable}>
                                        <FaEdit />
                                    </S.HoverButton>
                                    <S.HoverButton
                                        onClick={() => {
                                            handleDelete(cardDetail.id);
                                        }}
                                    >
                                        <AiTwotoneDelete />
                                    </S.HoverButton>
                                </>
                            )}
                        </S.CardHeader>
                        <S.CardDetail>{cardDetail.text}</S.CardDetail>
                    </S.Card>
                )}
            </Draggable>
        );
    }
    return <CardEditor listId={listId} setEditable={setEditable} cardDetail={cardDetail} />;
};

export default Card;