import * as S from "@/pages/Card/Content/Description.styles";
import { useState } from "react";

const Description = () => {
    const [isFocus, setIsFocus] = useState<boolean>(false);

    const onFocusHandler = (e: React.FocusEvent<HTMLElement>) => {
        e.preventDefault();

        setIsFocus(!isFocus);
    };

    const onClickHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        setIsFocus(!isFocus);
    };

    return (
        <>
            <S.Description
                type="text"
                placeholder="  Add a more detailed description"
                onFocus={onFocusHandler}
            />
            {isFocus && (
                <S.ButtonWrapper>
                    <S.SubmitButton bgColor="#0079bf" color="white" onClick={onClickHandler}>
                        Submit
                    </S.SubmitButton>
                    <S.SubmitButton bgColor="white" onClick={onClickHandler}>
                        Close
                    </S.SubmitButton>
                </S.ButtonWrapper>
            )}
        </>
    );
};

export default Description;
