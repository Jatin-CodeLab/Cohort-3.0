import { Mail, Lock, Eye, Zap, ArrowRight } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { Auth } from "../Context/AppContext";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router";

export default function LoginPage() {
	let navigate = useNavigate();
	const { registerUsers, loggedInUsers, setLoggedInUsers } = useContext(Auth);
	let {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	if (loggedInUsers) {
		return <Navigate to="/main" replace />;
	}
	let formSubmit = (data) => {
		let user = registerUsers.find((val) => {
			return val.email === data.email && val.password === data.password;
		});
		if (!user) {
			reset();
			return;
		}
		setLoggedInUsers(user);
		localStorage.setItem("loggedingUser", JSON.stringify(user));
		navigate("/main");
		reset();
	};

	return (
		<div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col lg:flex-row">
			{/* LEFT SIDE */}
			<div className="lg:w-1/2 w-full flex flex-col justify-between p-8 lg:p-14 border-b lg:border-b-0 lg:border-r border-zinc-800 text-5xl">
				{/* Logo */}
				<div className="flex items-center gap-3">
					<div className="w-12 h-12 rounded-2xl bg-lime-400 flex items-center justify-center">
						<Zap className="text-black" size={22} />
					</div>

					<h1 className="text-4xl font-bold">
						Sky<span className="text-lime-400">Mart</span>
					</h1>
				</div>

				{/* Hero */}
				<div className="space-y-7 mt-20 lg:mt-0 text-5xl">
					<p className="uppercase tracking-widest text-lime-400 font-semibold">
						Welcome Back
					</p>

					<div>
						<h1 className="text-5xl xl:text-9xl font-bold leading-tight">
							Shop the future.
						</h1>

						<h1 className="text-5xl xl:text-7xl font-bold text-lime-400">
							Today.
						</h1>
					</div>

					<p className="text-zinc-500 text-lg max-w-xl leading-8">
						Thousands of products, lightning-fast delivery, and prices that make
						your wallet happy.
					</p>
				</div>

				{/* Bottom Cards */}

				<div className="grid grid-cols-3 gap-5 mt-16">
					<div className="border border-zinc-700 rounded-3xl text-center flex flex-col items-center justify-center gap-2">
						<h2 className="text-lime-400 text-4xl font-bold">20K+</h2>
						<p className="text-zinc-500 text-[2vw]">Products</p>
					</div>

					<div className="border border-zinc-700 rounded-3xl p-6 text-center flex flex-col items-center justify-center gap-2">
						<h2 className="text-lime-400 text-4xl font-bold">50K+</h2>
						<p className="text-zinc-500 text-[2vw]">Users</p>
					</div>

					<div className="border border-zinc-700 rounded-3xl p-6 text-center flex flex-col items-center justify-center gap-2">
						<h2 className="text-lime-400 text-4xl font-bold">4.9★</h2>
						<p className="text-zinc-500 text-[2vw]">Rating</p>
					</div>
				</div>
			</div>

			{/* RIGHT SIDE */}

			<div className="lg:w-1/2 w-full flex items-center justify-center p-8">
				<div className="w-full max-w-lg bg-[#121212] rounded-3xl border border-zinc-800 shadow-2xl p-10">
					<h1 className="text-5xl font-bold">Sign in</h1>

					<p className="text-zinc-500 mt-3 text-lg">
						Enter your credentials to continue
					</p>

					<form onSubmit={handleSubmit(formSubmit)} className="mt-10 space-y-6">
						{/* Email */}
						<div className="relative">
							<input
								{...register("email", { required: "email is required !" })}
								type="email"
								placeholder="Enter your email"
								className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
							/>
							{errors.email && (
								<p className="text-red-500 m-2">{errors.email.message}</p>
							)}
						</div>

						{/* Password */}
						<div className="relative">
							<input
								{...register("password", {
									required: "password is required !",
									minLength: {
										value: 6,
										message: "Minimum 6 character is required !",
									},
								})}
								type="password"
								placeholder="Enter your password"
								className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
							/>
							{errors.password && (
								<p className="text-red-500 m-2">{errors.password.message}</p>
							)}
						</div>

						{/* Submit Button */}
						<button
							type="submit"
							className="w-full bg-lime-400 hover:bg-lime-300 transition rounded-2xl py-5 text-black text-xl font-bold flex justify-center items-center gap-3"
						>
							Sign in
							<ArrowRight size={22} />
						</button>
					</form>

					<button
						onClick={() => navigate("/register")}
						className="w-full text-center mt-8 text-zinc-500"
					>
						Don't have an account?{" "}
						<span className="text-lime-400 font-semibold hover:underline">
							Create one
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}
