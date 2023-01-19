const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="side_title">
                <ul>
                    <li>Workspace name</li>
                </ul>
            </div>
            <div>
                <ul className="workspace_setting">
                    <li className="workspace_board">Board</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="Board1">Board 1</li>
                    <li className="Board2">Board 2</li>
                    <li className="Board3">Board 3</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
