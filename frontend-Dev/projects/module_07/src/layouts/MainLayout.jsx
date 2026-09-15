import { Outlet } from "react-router";
import {
	ShoppingCart,
	Home,
	Heart,
	User,
	Menu,
	Search,
	Bell,
} from "lucide-react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { Auth } from "../Context/AppContext";
import { LogOut } from "lucide-react";

export default function MainLayout() {

  const navigate = useNavigate();
	const { setLoggedInUsers, loggedInUsers } = useContext(Auth);


	const handleLogout = () => {
		localStorage.removeItem("loggedingUser");
		setLoggedInUsers(null);
		navigate("/");
	};
	return (
		<div className="min-h-screen bg-[#0d0d0d] text-white flex">
			{/* Sidebar */}
			<aside className="hidden lg:flex w-64 bg-[#111111] border-r border-zinc-800 flex-col p-6">
				<h1 className="text-3xl font-bold mb-10">
					<span className="text-lime-400">Mart</span>
				</h1>

				<nav className="space-y-3">
					<button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-lime-400 text-black font-semibold">
						<Home size={20} />
						Home
					</button>
				</nav>
			</aside>

			{/* Main */}
			<div className="flex-1 flex flex-col">
				{/* Navbar */}
				<header className="h-20 border-b border-zinc-800 bg-[#111111] flex items-center justify-between px-5 lg:px-8">
					<div className="flex items-center gap-4">
						<button className="lg:hidden">
							<Menu />
						</button>

						<div className="hidden md:flex items-center bg-[#1a1a1a] rounded-xl px-4 py-2 w-80">
							<Search size={18} className="text-zinc-400" />
							<input
								type="text"
								placeholder="Search products..."
								className="bg-transparent outline-none px-3 w-full text-white"
							/>
						</div>
					</div>

					<div className="flex items-center gap-5">
						<button className="relative">
							<Bell />
							<span className="absolute -top-1 -right-1 w-2 h-2 bg-lime-400 rounded-full"></span>
						</button>

						<div className="flex items-center gap-3">
							<img
								src="https://i.pravatar.cc/100"
								alt=""
								className="w-10 h-10 rounded-full"
							/>
							<button
								onClick={handleLogout}
								className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl font-semibold transition"
							>
								<LogOut size={18} />
								Logout
							</button>

							<div className="hidden sm:block">
                <p className="font-semibold">{loggedInUsers.name}</p>
								<p className="text-sm text-zinc-400">Welcome 👋</p>
							</div>
						</div>
					</div>
				</header>

				{/* Content */}
				<main className="flex-1 p-5 lg:p-8">
					{/* Stats */}
					<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
						<div className="bg-[#111111] border border-zinc-800 rounded-3xl p-6">
							<p className="text-zinc-400">Total Products</p>
							<h2 className="text-4xl font-bold mt-3 text-lime-400">2,540</h2>
						</div>

						<div className="bg-[#111111] border border-zinc-800 rounded-3xl p-6">
							<p className="text-zinc-400">Orders</p>
							<h2 className="text-4xl font-bold mt-3 text-lime-400">1,248</h2>
						</div>

						<div className="bg-[#111111] border border-zinc-800 rounded-3xl p-6">
							<p className="text-zinc-400">Customers</p>
							<h2 className="text-4xl font-bold mt-3 text-lime-400">860</h2>
						</div>

						<div className="bg-[#111111] border border-zinc-800 rounded-3xl p-6">
							<p className="text-zinc-400">Revenue</p>
							<h2 className="text-4xl font-bold mt-3 text-lime-400">₹1.2L</h2>
						</div>
					</div>

					{/* Products */}
					<div className="mt-8 bg-[#111111] border border-zinc-800 rounded-3xl p-6">
						<h2 className="text-2xl font-bold mb-5">Latest Products</h2>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
							{[1, 2, 3, 4].map((item) => (
								<div
									key={item}
									className="bg-[#1a1a1a] rounded-2xl overflow-hidden hover:scale-105 transition"
								>
									<img
										src="https://picsum.photos/300/200"
										alt=""
										className="w-full h-44 object-cover"
									/>

									<div className="p-4">
										<h3 className="font-semibold text-lg">Product Name</h3>
										<p className="text-zinc-400 mt-1">
											Awesome product description.
										</p>

										<div className="flex justify-between items-center mt-4">
											<span className="text-lime-400 font-bold text-xl">
												₹999
											</span>

											<button className="bg-lime-400 text-black px-4 py-2 rounded-xl font-semibold hover:bg-lime-300">
												Buy
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<Outlet />
				</main>
			</div>
		</div>
	);
}
