import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./Context/AppContext";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<AppRoutes />
		<ToastContainer />
	</AuthProvider>,
);
