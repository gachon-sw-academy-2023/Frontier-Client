import BC from "./styles";

const BoardCard = () => {
    return (
        <BC.BoardBox>
            <BC.BoardImg>wordspace_img</BC.BoardImg>
            <div className="board_content">
                <h1>BoardCard1</h1>
                <span>2023-01-15</span>
            </div>
            <BC.BoardFunc>
                <button type="button" className="board_star">
                    ☆
                </button>
            </BC.BoardFunc>
        </BC.BoardBox>
    );
};

export default BoardCard;
