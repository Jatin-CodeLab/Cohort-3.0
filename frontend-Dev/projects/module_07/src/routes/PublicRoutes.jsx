import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router";
import { Auth } from "../Context/AppContext";

function PublicRoutes() {
	const { loggedInUsers } = useContext(Auth);

	if (loggedInUsers) {
		return <Navigate to={"/main"} />;
	}

	return <Outlet />;
}

export default PublicRoutes;
