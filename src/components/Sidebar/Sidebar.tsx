import React from "react";

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <div className="side_name">Logo</div> {/* Logo space */}
            <li className="side_item">TopItem</li> {/* Header item space */}
            <li className="side_view">SearchTab</li> {/* Searching space */}
            <li className="side_boardlist">UserFunction</li> {/* alarm, user profile space */}
        </nav>
    );
};

export default Sidebar;
