import React, { useContext } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../Context/AppContext";
import { toast } from "react-toastify";

function RegisterPage() {

    const { registerUsers, setRegisterUsers, setLoggedInUsers } =
			useContext(Auth);

	let navigate = useNavigate();
    let { register, handleSubmit, reset, formState: { errors } } = useForm() ;
    let formSubmit = (data) => {
        let arr = [...registerUsers, data];
		setRegisterUsers(arr)
		setLoggedInUsers(data)
				localStorage.setItem("loggedingUser", JSON.stringify(data));

        localStorage.setItem('registerUser', JSON.stringify(arr))
        toast.success('Account Ceated !')
        navigate('/main')
        reset()
    };

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
			<div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
				{/* Heading */}
				<h1 className="text-3xl font-bold text-center text-gray-800">
					Create Account
				</h1>
				<p className="text-center text-gray-500 mt-2">
					Register to get started
				</p>

				{/* Form */}
				<form onSubmit={handleSubmit(formSubmit)} className="mt-8 space-y-5">
					{/* Name */}
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Name
						</label>
						<input
							{...register("name", { required: "name is required !" })}
							type="text"
							placeholder="Enter your name"
							className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
						/>
						{errors.name && (
							<p className="text-red-500 m-1">{errors.name.message}</p>
						)}
					</div>

					{/* Email */}
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Email
						</label>
						<input
							{...register("email", { required: "email is required !" })}
							type="email"
							placeholder="Enter your email"
							className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
						/>
						{errors.email && (
							<p className="text-red-500 m-1">{errors.email.message}</p>
						)}{" "}
					</div>

					{/* Password */}
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Password
						</label>
						<input
							{...register("password", {
								required: "password is required !",
								minLength: {
									value: 6,
									message: "Minimum 6 character is required !",
								},
							})}
							type="password"
							placeholder="Create a password"
							className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
						/>
						{errors.password && (
							<p className="text-red-500 m-1">{errors.password.message}</p>
						)}
					</div>

					{/* Register Button */}
					<button
						type="submit"
						className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
					>
						Register
					</button>
				</form>

				{/* Login */}
				<p className="text-center text-gray-600 mt-6">
					Already have an account?{" "}
					<button
						onClick={() => navigate("/")}
						className="text-blue-600 font-semibold hover:underline"
					>
						Login
					</button>
				</p>
			</div>
		</div>
	);
}

export default RegisterPage;
