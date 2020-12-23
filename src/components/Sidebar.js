import { Avatar } from "@material-ui/core";
import React from "react";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="Sidebar_header">
				<Avatar />
			</div>
			<div className="sidebar_chats"></div>
		</div>
	);
}

export default Sidebar;
