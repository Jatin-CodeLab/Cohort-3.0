import { ShoppingCart, Zap, Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { Auth } from "../Context/AppContext";

function Header() {
	const navigate = useNavigate();

	const [menuOpen, setMenuOpen] = useState(false);
const { loggedInUsers, setLoggedInUsers, setCartItems } = useContext(Auth);
const handleLogout = () => {
	setLoggedInUsers(null);
	setCartItems([]);
	localStorage.removeItem("loggedingUser");
	navigate("/");
};
	return (
		<header className="w-full border-b border-zinc-800 bg-[#0d0d0d] text-white sticky top-0 z-50">
			<div className="max-w-[90%] pl-2 mx-auto h-20  flex items-center justify-between">
				{/* Logo */}
				<div
					onClick={() => navigate("/main")}
					className="flex items-center gap-3 cursor-pointer"
				>
					<div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-lime-400 flex items-center justify-center">
						<Zap className="text-black" size={18} />
					</div>

					<h1 className="text-2xl sm:text-3xl font-bold">
						Sky<span className="text-lime-400">Mart</span>
					</h1>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-8 text-lg font-semibold">
					<NavLink
						to="/main"
						end
						className={({ isActive }) =>
							isActive
								? "text-lime-400 font-bold"
								: "text-white hover:text-lime-400 duration-300"
						}
					>
						Home
					</NavLink>

					<NavLink
						to="/main/shop"
						className={({ isActive }) =>
							isActive
								? "text-lime-400 font-bold"
								: "text-white hover:text-lime-400 duration-300"
						}
					>
						Shop
					</NavLink>

					<NavLink
						to="/main/about"
						className={({ isActive }) =>
							isActive
								? "text-lime-400 font-bold"
								: "text-white hover:text-lime-400 duration-300"
						}
					>
						About
					</NavLink>
				</nav>

				{/* Right Side */}
				<div className="flex items-center gap-2 sm:gap-3">
					{/* User */}
					<div className="hidden lg:flex items-center gap-3 bg-[#181818] border border-zinc-700 rounded-2xl px-4 py-2">
						<div className="px-3 py-1 rounded-xl bg-lime-400 text-black font-bold flex items-center justify-center text-2xl">
							{loggedInUsers?.name?.charAt(0)?.toUpperCase()}
						</div>

						<span className="font-semibold whitespace-nowrap">
							{loggedInUsers?.name}
						</span>
					</div>

					{/* Cart */}
					<button
						onClick={() => navigate("/main/addToCart")}
						className="p-2 sm:p-3 rounded-xl border border-zinc-700 hover:bg-zinc-800 duration-300"
					>
						<ShoppingCart size={22} />
					</button>

					{/* Logout */}

					<button
						className="text-2xl hidden md:block px-4 py-[.8rem] rounded-xl border border-zinc-700 hover:bg-red-900 duration-300"
						onClick={handleLogout}
					>
						Logout
					</button>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						className="md:hidden p-2 rounded-xl border border-zinc-700"
					>
						{menuOpen ? <X size={22} /> : <Menu size={22} />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className="md:hidden border-t border-zinc-800 bg-[#111111]">
					<nav className="flex flex-col p-5 gap-5">
						<NavLink
							to="/main"
							onClick={() => setMenuOpen(false)}
							className={({ isActive }) =>
								isActive ? "text-lime-400 font-bold" : "text-white"
							}
							end
						>
							Home
						</NavLink>

						<NavLink
							to="/main/shop"
							onClick={() => setMenuOpen(false)}
							className={({ isActive }) =>
								isActive ? "text-lime-400 font-bold" : "text-white"
							}
						>
							Shop
						</NavLink>

						<NavLink
							to="/main/about"
							onClick={() => setMenuOpen(false)}
							className={({ isActive }) =>
								isActive ? "text-lime-400 font-bold" : "text-white"
							}
						>
							About
						</NavLink>

						<div className="flex gap-2 items-center justify-center border-t-1 p-2">
							<div className="flex items-center justify-center  gap-3  border-zinc-700">
								<div className="px-3 py-1 rounded-xl bg-lime-400 text-black font-bold flex items-center justify-center text-2xl">
									{loggedInUsers?.name?.charAt(0)?.toUpperCase()}
								</div>

								<span>{loggedInUsers?.name}</span>
							</div>

							<button
								onClick={handleLogout}
								className="px-3 py-3 rounded-xl border border-zinc-700 hover:bg-red-800 duration-300"
							>
								Log Out
							</button>
						</div>
					</nav>
				</div>
			)}
		</header>
	);
}

export default Header;
