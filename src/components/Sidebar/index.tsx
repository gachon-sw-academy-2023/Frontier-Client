import { ROUTES } from "@/utils/routes";
import Side from "./styles";

const Sidebar = () => (
    <Side.HomeSide>
        <Side.SideTop>
            <Side.SideButton>
                <Side.SideLink to={ROUTES.HOMEPAGE}>Board</Side.SideLink>
            </Side.SideButton>
            <Side.SideButton>
                <Side.SideLink to={ROUTES.HOMEPAGE}>Home</Side.SideLink>
            </Side.SideButton>
        </Side.SideTop>
        <Side.SideBottom>
            <Side.SideContent color="gray">
                <div>WorkSpace</div>
                <button type="button" className="add_workspace">
                    +
                </button>
            </Side.SideContent>
            <Side.SideButton>WorkSpace1</Side.SideButton>
            <Side.SideButton>WorkSpace2</Side.SideButton>
        </Side.SideBottom>
    </Side.HomeSide>
);

export default Sidebar;
