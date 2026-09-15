import { Children, createContext, useState } from "react";
import {  useEffect } from "react";
export const Auth = createContext();

export const AuthProvider = ({ children }) => {
	const [registerUsers, setRegisterUsers] = useState(
		JSON.parse(localStorage.getItem("registerUser")) || [],
	);
	const [loggedInUsers, setLoggedInUsers] = useState(
		JSON.parse(localStorage.getItem("loggedingUser")),
	);

const [cartItems, setCartItems] = useState(
	JSON.parse(localStorage.getItem(`cartItems_${loggedInUsers?.email}`)) || [],
	);
	useEffect(() => {
		if (loggedInUsers) {
			const userCart =
				JSON.parse(localStorage.getItem(`cartItems_${loggedInUsers.email}`)) ||
				[];

			setCartItems(userCart);
		} else {
			setCartItems([]);
		}
	}, [loggedInUsers]);

	console.log("register", registerUsers);
	console.log("logged", loggedInUsers);
	console.log("cart", cartItems);

	return (
		<Auth.Provider
			value={{
				registerUsers,
				loggedInUsers,
				setLoggedInUsers,
				setRegisterUsers,
				cartItems,
				setCartItems,
			}}
		>
			{children}
		</Auth.Provider>
	);
};
