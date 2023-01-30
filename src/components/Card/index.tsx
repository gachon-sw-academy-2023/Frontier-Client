/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import * as S from "./styles";

interface CardProps {
    cardId: number;
    cardText: string;
    index: number;
    listId: string;
}

const Card = ({ cardId, cardText, index }: CardProps) => (
    <Draggable draggableId={cardId.toString()} index={index}>
        {(provided) => (
            <S.Card
                ref={provided.innerRef}
                {...provided.dragHandleProps}
                {...provided.draggableProps}
            >
                {cardText}
            </S.Card>
        )}
    </Draggable>
);

export default Card;
