/* eslint-disable @typescript-eslint/no-unused-vars */
import { cardState } from "@/recoil/atom";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import * as S from "./styles";

interface AddListProps {
    boardId: string;
}

const AddList = ({ boardId }: AddListProps) => {
    const [title, setTitle] = useState("");
    const setList = useSetRecoilState(cardState(boardId));

    const [ToggleAddList, setToggleAddList] = useState<boolean>(false);
    const handleToggleAddList = () => {
        setToggleAddList((current) => !current);
    };

    const handleAddList = () => {
        if (title.length !== 0) {
            setList((prev) => ({
                ...prev,
                [title]: [],
            }));
            setTitle("");
            setToggleAddList(false);
        }
    };

    const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            handleAddList();
        }
    };

    return (
        <S.AddList>
            {ToggleAddList ? (
                <S.AddListEditor>
                    <S.ListTitleEdit>
                        <S.ListTitleInput
                            value={title}
                            placeholder="Enter list title..."
                            autoFocus
                            autoComplete="off"
                            onChange={handleChangeTitle}
                            onKeyDown={handleKeyPress}
                        />
                    </S.ListTitleEdit>
                    <S.EditButtons>
                        <S.EditButton color="#5aac44" onClick={handleAddList}>
                            Add List
                        </S.EditButton>
                        <S.EditButton color="#999999" onClick={handleToggleAddList}>
                            Cancel
                        </S.EditButton>
                    </S.EditButtons>
                </S.AddListEditor>
            ) : (
                <S.AddListButton onClick={handleToggleAddList}> Add a List </S.AddListButton>
            )}
        </S.AddList>
    );
};

export default AddList;
