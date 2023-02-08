import { cardState, CardStateInterface } from "@/recoil/atom";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useSetRecoilState } from "recoil";
import S from "./styles";

interface ListEditorProp {
    setEditable: Dispatch<SetStateAction<boolean>>;
    listId: string;
}

const ListEditor = ({ setEditable, listId }: ListEditorProp) => {
    const setCards = useSetRecoilState(cardState);
    const [title, setTitle] = useState(listId);
    const handleEditList = () => {
        setCards((prev) => {
            const keyList = Object.keys(prev);
            const findIndex = keyList.findIndex((list) => list === listId);
            const newList: CardStateInterface = {};
            keyList.forEach((list, index) => {
                if (index === findIndex) {
                    newList[title] = [...prev[list]];
                } else {
                    newList[list] = [...prev[list]];
                }
            });
            return newList;
        });
    };
    const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.target.value);
    };
    return (
        <S.AddListEditor>
            <S.ListTitleEdit>
                <S.ListTitleInput
                    placeholder={listId}
                    autoFocus
                    autoComplete="off"
                    value={title}
                    onChange={handleChangeTitle}
                />
            </S.ListTitleEdit>
            <S.EditButtons>
                <S.EditButton color="#5aac44" onClick={handleEditList}>
                    Edit list
                </S.EditButton>
                <S.EditButton color="#999999" onClick={() => setEditable(false)}>
                    Cancel
                </S.EditButton>
            </S.EditButtons>
        </S.AddListEditor>
    );
};

export default ListEditor;
