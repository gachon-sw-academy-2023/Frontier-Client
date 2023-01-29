/* eslint-disable @typescript-eslint/no-unused-vars */
import { cardState } from "@/recoil/atom";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import * as S from "./styles";

const AddList = () => {
    const [title, setTitle] = useState("");
    const setList = useSetRecoilState(cardState);

    const [ToggleAddList, setToggleAddList] = useState<boolean>(false);
    const handleToggleAddList = () => {
        setToggleAddList((current) => {
            return !current;
        });
    };
    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };
    const handleAddList = () => {
        setList((prev) => {
            return {
                ...prev,
                [title]: [],
            };
        });
        setToggleAddList(false);
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
                        />
                    </S.ListTitleEdit>
                    <S.EditButtons>
                        <S.EditButton color="#5aac44" onClick={handleAddList}>
                            Add List
                        </S.EditButton>
                        <S.EditButtonCancel color="red" onClick={handleToggleAddList}>
                            Cancel
                        </S.EditButtonCancel>
                    </S.EditButtons>
                </S.AddListEditor>
            ) : (
                <S.AddListButton onClick={handleToggleAddList}> Add a List </S.AddListButton>
            )}
        </S.AddList>
    );
};

export default AddList;
