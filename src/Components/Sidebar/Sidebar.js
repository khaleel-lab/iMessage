import React from "react";
import "./Sidebar.css";

import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewIcon from "@material-ui/icons/RateReview";
import SidebarChat from "../SidebarChat/SidebarChat";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<Avatar className="sidebar__avatar" />
				<div className="sidebar__input">
					<input type="text" placeholder="Search" />
					<SearchIcon className="sidebar__icon" />
				</div>

				<IconButton variant="outlined" className="sidebar__inputButton">
					<RateReviewIcon />
				</IconButton>
			</div>

			<div className="sidebar__chats">
				<SidebarChat />
			</div>
		</div>
	);
}

export default Sidebar;
