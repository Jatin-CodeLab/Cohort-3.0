import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router'
import { Auth } from "../Context/AppContext";

function ProtectedRoute() {
  const { loggedInUsers } = useContext(Auth)

  if (!loggedInUsers) {
    return <Navigate to={'/'}/>
  }

  return <Outlet/>
}

export default ProtectedRoute