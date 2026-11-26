import React, { useState } from 'react'
import useApi from "../../shered/useApi";
import { useAuthContext } from "../context/AuthProvider";
import { useNavigate } from 'react-router';

function Register() {

  const api = useApi()
  const authContext = useAuthContext()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/auth/register', {
      name,
      email,
      password
    })

    console.log(response.data)  
    authContext.setAccessToken(response.data.accessToken);
    authContext.setUser(response.data.data.user)
    navigate('/profile')
  }

  return (
		<main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-md bg-white p-8 rounded-xl shadow-md space-y-5"
			>
				<h2 className="text-2xl font-bold text-center text-gray-800">
					Create Account
				</h2>

				<input
					type="text"
					placeholder="Enter your name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
				/>

				<input
					type="email"
					placeholder="Enter your email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
				/>

				<input
					type="password"
					placeholder="Enter your password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
				/>

				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
				>
					Register
				</button>
			</form>
		</main>
	);
}

export default Register