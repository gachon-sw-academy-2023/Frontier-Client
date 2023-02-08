/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { CardInterface } from "@/interfaces/cardInterface";
import { useSetRecoilState } from "recoil";
import { cardState, CardStateInterface } from "@/recoil/atom";
import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import Card from "@/components/Board/Card";
import ListEditor from "@/components/Board/ListEditor";
import S from "./styles";
import AddCard from "../AddCard";

interface ListProps {
    listId: string;
    boardId: string;
    cards: CardInterface[];
    index: number;
}

const List = ({ listId, boardId, cards, index }: ListProps) => {
    const setCards = useSetRecoilState(cardState(boardId));
    const [isHover, setIsHover] = useState<boolean>(false);
    const [editable, setEditable] = useState<boolean>(false);
    const handleDeleteList = () => {
        setCards((prev) => {
            const keyList = Object.keys(prev);
            const filteredList = keyList.filter((list) => list !== listId);
            const newList: CardStateInterface = {};
            filteredList.forEach((list) => {
                newList[list] = [...prev[list]];
            });
            return newList;
        });
    };
    const handleEditable = () => {
        setEditable((current) => !current);
    };
    return (
        <Draggable draggableId={listId} index={index}>
            {(provided) => (
                <S.List
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <S.ListHeader
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        {editable ? (
                            <ListEditor
                                setEditable={setEditable}
                                boardId={boardId}
                                listId={listId}
                            />
                        ) : (
                            <S.ListTitle>{listId}</S.ListTitle>
                        )}
                        {isHover && (
                            <S.HoverButtons>
                                <S.HoverEditButton onClick={handleEditable}>
                                    <FaEdit />
                                </S.HoverEditButton>
                                <S.HoverEditButton onClick={handleDeleteList}>
                                    <AiTwotoneDelete />
                                </S.HoverEditButton>
                            </S.HoverButtons>
                        )}
                    </S.ListHeader>
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
                                        boardId={boardId}
                                        cardDetail={card}
                                        listId={listId}
                                    />
                                ))}
                                {droppableProvided.placeholder}
                                <AddCard listId={listId} boardId={boardId} editable={false} />
                            </div>
                        )}
                    </Droppable>
                </S.List>
            )}
        </Draggable>
    );
};

export default List;
