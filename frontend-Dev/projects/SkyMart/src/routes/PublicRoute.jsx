import { Navigate, Outlet } from "react-router";
import { useContext } from "react";
import { Auth } from "../Context/AppContext";

function PublicRoute() {
	const { loggedInUsers } = useContext(Auth);

	if (loggedInUsers) {
		return <Navigate to="/main" replace />;
	}

	return <Outlet />;
}

export default PublicRoute;
