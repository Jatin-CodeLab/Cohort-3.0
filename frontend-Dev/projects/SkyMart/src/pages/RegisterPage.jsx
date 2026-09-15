import { User, Mail, Lock, Eye, ArrowRight, Zap } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../Context/AppContext";
import { useContext } from "react";

export default function RegisterPage() {
	let navigate = useNavigate();
	let {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const { registerUsers, setRegisterUsers, setLoggedInUsers, loggedInUsers} =
		useContext(Auth);
if (loggedInUsers) {
	return <Navigate to="/main" replace />;
}
	let formRegister = (data) => {
		 let arr = [...registerUsers, data];
				setRegisterUsers(arr)
				setLoggedInUsers(data)
						localStorage.setItem("loggedingUser", JSON.stringify(data));
		
				localStorage.setItem('registerUser', JSON.stringify(arr))
				navigate('/main')

		reset();
	};

	return (
		<div className="min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center px-5">
			{/* Logo */}
			<div className="flex items-center gap-3 mb-10">
				<div className="w-12 h-12 rounded-2xl bg-lime-400 flex items-center justify-center">
					<Zap size={22} className="text-black" />
				</div>

				<h1 className="text-4xl font-bold text-white">
					Sky<span className="text-lime-400">Mart</span>
				</h1>
			</div>

			{/* Card */}

			<div className="w-full max-w-xl flex flex-col  bg-[#111111] border border-zinc-800 rounded-[30px] shadow-2xl p-10">
				<h1 className="text-5xl font-bold text-white">Create account</h1>

				<p className="text-zinc-500 text-lg mt-2">
					Join SkyMart and start shopping
				</p>

				{/* Full Name */}

				<form onSubmit={handleSubmit(formRegister)}>
					<div className="relative mt-10">
						<input
							{...register("name", { required: "name is required !" })}
							type="text"
							placeholder="Full name"
							className="w-full bg-[#1d1d1d] border border-zinc-700 rounded-2xl py-5 pl-4 pr-5 text-white outline-none focus:border-lime-400 transition"
						/>
						{errors.name && (
							<p className="text-red-500 m-1">{errors.name.message}</p>
						)}
					</div>

					{/* Email */}

					<div className="relative mt-5">
						<input
							{...register("email", { required: "email is required !" })}
							type="email"
							placeholder="Email address"
							className="w-full bg-[#1d1d1d] border border-zinc-700 rounded-2xl py-5 pl-4 pr-5 text-white outline-none focus:border-lime-400 transition"
						/>
						{errors.email && (
							<p className="text-red-500 m-1">{errors.email.message}</p>
						)}
					</div>

					{/* Password */}

					<div className="relative mt-5">
						<input
							{...register("password", {
								required: "password is required !",
								minLength: {
									value: 6,
									message: "Minimum 6 character is required !",
								},
							})}
							type="password"
							placeholder="Password (min 6 chars)"
							className="w-full bg-[#1d1d1d] border border-zinc-700 rounded-2xl py-5 pl-4 pr-14 text-white outline-none focus:border-lime-400 transition"
						/>
						{errors.password && (
							<p className="text-red-500 m-1">{errors.password.message}</p>
						)}
					</div>
					{/* Button */}

					<button className="w-full bg-lime-400 hover:bg-lime-300 transition mt-8 rounded-2xl py-5 text-black font-bold text-xl flex items-center justify-center gap-3">
						Create Account
					</button>
				</form>

				{/* Footer */}

				<button
					onClick={() => navigate("/")}
					className="text-center text-zinc-500 mt-8"
				>
					Already have an account?{" "}
					<span className="text-lime-400 font-semibold cursor-pointer hover:underline">
						Sign in
					</span>
				</button>
			</div>
		</div>
	);
}
