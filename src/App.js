import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Imessage from "./Components/Imessage/Imessage";
import Login from "./Components/Login/Login";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebaseConfig";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((authuser) => {
			if (authuser) {
				// user logged in
				dispatch(
					login({
						uid: authuser.uid,
						photo: authuser.photoURL,
						email: authuser.email,
						displayName: authuser.displayName,
					})
				);
			} else {
				//user logged out
				dispatch(logout());
			}
		});
	}, []);

	return <div className="app">{user ? <Imessage /> : <Login />}</div>;
}

export default App;
