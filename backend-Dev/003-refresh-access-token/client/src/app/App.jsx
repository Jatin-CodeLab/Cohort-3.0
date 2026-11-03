import React from 'react'
import './App.css'
import routes from "./app.route";
import { RouterProvider } from "react-router";
import { AuthProvider } from "../modules/auth/contextAPI/AuthContext";

function App() {
  return (
		<AuthProvider>
			<RouterProvider router={routes} />
		</AuthProvider>
	);
}

export default App