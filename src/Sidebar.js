import React from "react";

function Sidebar(props){
    return (
        <div className="sidebar">
            <h2>Material List</h2>

            <h3>Gather</h3>
            <ul>
                <li>2 Sandstone</li>
                <li>1 Limestone</li>
            </ul>

            <h3>Stonemason</h3>
            <ul>
                <li>1 Limestone Block</li>
                <li>1 Sandstone Block</li>
            </ul>
        </div>
    );
}

export default Sidebar;
