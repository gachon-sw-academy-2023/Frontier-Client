import { useNavigate } from "react-router-dom";
import { WorkspaceInterface } from "@/interfaces/workspaceInterface";
import BC from "./styles";

const BoardCard = (props: WorkspaceInterface) => {
    const navigate = useNavigate();
    return (
        <BC.BoardBox onClick={() => navigate("/board")}>
            <BC.BoardImg>wordspace_img</BC.BoardImg>
            <div className="board_content">
                <h1>{props.name}</h1>
                <span>{props.date}</span>
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
