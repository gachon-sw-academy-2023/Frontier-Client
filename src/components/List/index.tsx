/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { CardInterface } from "@/recoil/atom";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Card from "@/components/Card";
import * as S from "./styles";
import AddCard from "../AddCard";

interface ListProps {
    listId: string;
    cards: CardInterface[];
    index: number;
}

const List = ({ listId, cards, index }: ListProps) => (
    <Draggable draggableId={listId} index={index}>
        {(provided) => (
            <S.List
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
                <S.ListTitle>{listId}</S.ListTitle>
                <Droppable droppableId={listId}>
                    {(droppableProvided) => (
                        <div
                            ref={droppableProvided.innerRef}
                            {...droppableProvided.droppableProps}
                            className="Lists-Cards"
                        >
                            {cards.map((card, cardindex) => (
                                <Card
                                    key={card.id}
                                    index={cardindex}
                                    cardDetail={card}
                                    listId={listId}
                                />
                            ))}
                            {droppableProvided.placeholder}
                            <AddCard listId={listId} />
                        </div>
                    )}
                </Droppable>
            </S.List>
        )}
    </Draggable>
);

export default List;
