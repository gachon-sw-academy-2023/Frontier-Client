import React from "react";
import List from "@/components/List";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { cardState, CardStateInterface } from "@/recoil/atom";
import AddList from "@/components/AddList";
import * as S from "./styles";

const Board = () => {
    const [cards, setCards] = useRecoilState(cardState);

    const onDragEnd = ({ source, destination, type }: DropResult) => {
        if (!destination) return;
        if (type === "COLUMN") {
            setCards((prev) => {
                const keyList = Object.keys(cards);
                const newList: CardStateInterface = {};
                let sourceKey: string;
                let destinationKey: string;
                keyList.forEach((item, index) => {
                    if (index === source.index) sourceKey = item;
                    if (index === destination.index) destinationKey = item;
                });
                keyList.forEach((item) => {
                    if (item === sourceKey) return;
                    if (item === destinationKey && source.index > destination.index) {
                        newList[sourceKey] = [...prev[sourceKey]];
                    }
                    newList[item] = [...prev[item]];
                    if (item === destinationKey && source.index < destination.index) {
                        newList[sourceKey] = [...prev[sourceKey]];
                    }
                });
                return newList;
            });
        } else {
            if (source.droppableId === destination?.droppableId) {
                setCards((allLists) => {
                    const listCopy = [...allLists[source.droppableId]];
                    const taskObject = listCopy[source.index];
                    listCopy.splice(source.index, 1);
                    listCopy.splice(destination?.index, 0, taskObject);
                    const result = {
                        ...allLists,
                        [source.droppableId]: listCopy,
                    };
                    return result;
                });
            }
            if (source.droppableId !== destination?.droppableId) {
                setCards((allLists) => {
                    const sourceList = [...allLists[source.droppableId]];
                    const taskObject = sourceList[source.index];
                    const destinationList = [...allLists[destination.droppableId]];
                    sourceList.splice(source.index, 1);
                    destinationList.splice(destination?.index, 0, taskObject);
                    const result = {
                        ...allLists,
                        [source.droppableId]: sourceList,
                        [destination.droppableId]: destinationList,
                    };
                    return result;
                });
            }
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="board" direction="horizontal" type="COLUMN">
                {(provided) => {
                    return (
                        <S.Board ref={provided.innerRef}>
                            {Object.keys(cards).map((listId, index) => {
                                return (
                                    <List
                                        listId={listId}
                                        key={listId}
                                        cards={cards[listId]}
                                        index={index}
                                    />
                                );
                            })}
                            {provided.placeholder}
                            <AddList />
                        </S.Board>
                    );
                }}
            </Droppable>
        </DragDropContext>
    );
};

export default Board;
