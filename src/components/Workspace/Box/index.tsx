import { useNavigate } from "react-router-dom";
import { BoardInterface } from "@/interfaces/boardInterface";
import Box from "./styles";

const WorkspaceBox = ({ id, workspace_id, name, ownername, date }: BoardInterface) => {
    const navigate = useNavigate();
    return (
        <Box.Box
            onClick={() =>
                navigate(`workspace/${workspace_id}/boards/${id}`, {
                    state: {
                        workspaceID: workspace_id,
                        boardID: id,
                    },
                })
            }
        >
            <Box.BoxContent>
                <h1>{name}</h1>
                <div>{ownername}</div>
                <span>{date}</span>
            </Box.BoxContent>
        </Box.Box>
    );
};

export default WorkspaceBox;
