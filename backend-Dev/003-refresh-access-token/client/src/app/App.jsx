import React from 'react'
import './App.css'
import routes from "./app.route";
import { RouterProvider } from "react-router";

function App() {
  return (
    <RouterProvider router={routes}/>
  )
}

export default App