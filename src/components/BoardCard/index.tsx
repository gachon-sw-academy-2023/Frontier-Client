import { useNavigate } from "react-router-dom";
import { BoardInterface } from "@/interfaces/boardInterface";
import Box from "./styles";

const BoardCard = (props: BoardInterface) => {
    const navigate = useNavigate();
    return (
        <Box.Box
            onClick={() =>
                navigate(`workspace/${props.workspace_id}/boards/${props.id}`, {
                    state: {
                        workspaceID: props.workspace_id,
                        boardID: props.id
                    },
                })
            }
        >
            <Box.BoxContent>
                <h1>{props.name}</h1>
                <div>{props.ownername}</div>
                <span>{props.date}</span>
            </Box.BoxContent>
        </Box.Box>
    );
};

export default BoardCard;
