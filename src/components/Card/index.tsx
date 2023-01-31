/* eslint-disable react/jsx-props-no-spreading */
import { CardInterface } from "@/recoil/atom";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import S from "./styles";

interface CardProps {
    cardDetail: CardInterface;
    index: number;
}

const Card = ({ cardDetail, index }: CardProps) => (
    <Draggable draggableId={cardDetail.id.toString()} index={index}>
        {(provided) => (
            <S.Card
                ref={provided.innerRef}
                {...provided.dragHandleProps}
                {...provided.draggableProps}
            >
                <S.CardHeader>
                    <S.CardTitle>{cardDetail.title}</S.CardTitle>
                </S.CardHeader>
                <S.CardDetail>{cardDetail.text}</S.CardDetail>
            </S.Card>
        )}
    </Draggable>
);

export default Card;
