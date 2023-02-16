import React from "react";
import List from "@/components/Board/List";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { cardState, CardStateInterface } from "@/recoil/atom";
import AddList from "@/components/Board/AddList";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import * as S from "./styles";

const Board = () => {
    const { boardId } = useLocation().state;
    const [cards, setCards] = useRecoilState(cardState(boardId));

    const onDragEnd = ({ source, destination, type }: DropResult) => {
        if (!destination) return;
        if (type === "COLUMN") {
            setCards((prev) => {
                const keyList = Object.keys(cards);
                const taskObject = keyList[source.index];
                keyList.splice(source.index, 1);
                keyList.splice(destination?.index, 0, taskObject);
                const newList: CardStateInterface = {};
                keyList.forEach((list) => {
                    newList[list] = [...prev[list]];
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
        <S.BoardContent>
            <Navbar />
            <Sidebar />
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="board" direction="horizontal" type="COLUMN">
                    {(provided) => (
                        <S.Board ref={provided.innerRef}>
                            {Object.keys(cards).map((listId, index) => (
                                <List
                                    boardId={boardId}
                                    listId={listId}
                                    key={listId}
                                    cards={cards[listId]}
                                    index={index}
                                />
                            ))}
                            {provided.placeholder}
                            <AddList boardId={boardId} />
                        </S.Board>
                    )}
                </Droppable>
            </DragDropContext>
        </S.BoardContent>
    );
};

export default Board;
