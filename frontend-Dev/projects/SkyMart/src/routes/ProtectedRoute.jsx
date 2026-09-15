import { Navigate, Outlet } from "react-router";
import { useContext } from "react";
import { Auth } from "../Context/AppContext";

function ProtectedRoute() {
	const { loggedInUsers } = useContext(Auth);

	if (!loggedInUsers) {
		return <Navigate to="/" replace />;
	}

	return <Outlet />;
}

export default ProtectedRoute;
