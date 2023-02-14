import { ROUTES } from "@/utils/routes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PopoverBody, PopoverHeader } from "styled-popover-component";
import S from "@/pages/Workspace/styles";
import { useRecoilState } from "recoil";
import { workspaceState } from "@/recoil/atom";
import Side from "./styles";

const Sidebar = () => {
    const navigate = useNavigate();
    const [workspaces, setWorkspaces] = useRecoilState(workspaceState);
    const [hidden, setHidden] = useState(true);
    const [position, setPosition] = useState([0, 0]);
    const [workspaceTitle, setWorkspaceTitle] = useState("");

    const handleAddWorkspace = () => {
        setWorkspaces((prev) => ({
            ...prev,
            [workspaceTitle]: [],
        }));
        setHidden(true);
        setWorkspaceTitle("");
    };
    const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setWorkspaceTitle(e.target.value);
    };

    return (
        <Side.HomeSide>
            <Side.SideTop>
                <Side.SideButtonLeft>
                    <Side.SideLink to={ROUTES.HOMEPAGE}>Home</Side.SideLink>
                </Side.SideButtonLeft>
            </Side.SideTop>
            <Side.SideBottom>
                <Side.SideContent color="gray">WorkSpaces</Side.SideContent>
                {Object.keys(workspaces).map((workspaceId) => (
                    <Side.SideButtonLeft
                        key={workspaceId}
                        onClick={() =>
                            navigate(`/homepage/workspaces/${workspaceId}`, {
                                state: {
                                    workspaceId,
                                },
                            })
                        }
                    >
                        <Side.SideLink to={ROUTES.WORKSPACE}> {workspaceId}</Side.SideLink>
                        {/* {workspaceId} */}
                    </Side.SideButtonLeft>
                ))}
                <Side.SideButtonCenter
                    onClick={(ev) => {
                        setHidden((current) => !current);
                        setPosition([
                            ev.currentTarget.offsetTop - ev.currentTarget.offsetHeight,
                            ev.currentTarget.offsetLeft + ev.currentTarget.offsetWidth,
                        ]);
                    }}
                >
                    +
                </Side.SideButtonCenter>
            </Side.SideBottom>

            <S.PopoverSizeUp
                hidden={hidden}
                style={{
                    top: `${position[0]}px`,
                    left: `${position[1]}px`,
                }}
                right
            >
                <PopoverHeader right> Add Workspace </PopoverHeader>
                <S.PopoverBodyTitle right>Title</S.PopoverBodyTitle>
                <PopoverBody right>
                    <S.TitleTextArea
                        placeholder="Workspace Title..."
                        onChange={handleChangeTitle}
                    />
                </PopoverBody>
                <PopoverBody>
                    <S.CreateButton color="#5aac44" onClick={handleAddWorkspace}>
                        Add Workspace
                    </S.CreateButton>
                    <S.CreateButton
                        color="#999999"
                        onClick={() => setHidden((current) => !current)}
                    >
                        Cancel
                    </S.CreateButton>
                </PopoverBody>
            </S.PopoverSizeUp>
        </Side.HomeSide>
    );
};

export default Sidebar;
