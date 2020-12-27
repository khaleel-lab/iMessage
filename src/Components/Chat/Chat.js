import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import "./Chat.css";
import MicNoneIcon from "@material-ui/icons/MicNone";

function Chat() {
	const [input, setInput] = useState("");

	const handleMsg = (e) => {
		e.preventDefault();
		setInput("");
	};

	return (
		<div className="chat">
			<div className="chat__header">
				<h4>
					To: <span className="chat__name">Channel name</span>
				</h4>
				<strong>Details</strong>
			</div>
			<div className="chat__messages">
				<h2>am a Message</h2>
			</div>
			<div className="chat__input">
				<form>
					<input
						type="text"
						placeholder="iMessage"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<button type="submit" onClick={handleMsg}>
						Send Message
					</button>
				</form>
				<IconButton>
					<MicNoneIcon />
				</IconButton>
			</div>
		</div>
	);
}

export default Chat;
