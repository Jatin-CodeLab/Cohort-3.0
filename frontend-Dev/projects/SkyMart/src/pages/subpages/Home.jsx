import {
	ArrowRight,
	Package,
	ShoppingBag,
	ShoppingCart,
	TrendingUp,
	Star,
	Tag,
	Laptop,
	Shirt,
	Smartphone,
	House,
	Heart,
	Eye,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import Card from "./subShop/Card";


function Home() {
const navigate = useNavigate();
	 
		return (
			<div className="min-h-screen bg-[#0d0d0d] text-white p-4 sm:p-6 lg:p-8">
				{/* ================= HERO ================= */}
				<section className="relative overflow-hidden rounded-[35px] border border-white -700 bg-[#111111]">
					{/* Grid Background */}

					<div
						className="absolute inset-0 opacity-10"
						style={{
							backgroundImage: `
						linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
						linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
						`,
							backgroundSize: "45px 45px",
						}}
					/>

					<div className="relative grid lg:grid-cols-[1fr_300px] gap-14 items-center p-8 md:p-12 lg:p-16">
						{/* LEFT */}

						<div>
							<p className="uppercase tracking-[5px] text-lime-400 font-semibold">
								Welcome Back 👋
							</p>

							<h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
								Shop Smarter,
								<br />
								<span className="text-lime-400">Live Better.</span>
							</h1>

							<p className="mt-8 max-w-xl text-zinc-400 text-lg leading-8">
								Discover premium products with amazing prices, fast delivery and
								trusted quality — everything you need in one place.
							</p>

							<div className="flex flex-col sm:flex-row gap-5 mt-10">
								<NavLink
									to="/main/shop"
									className="border border-zinc-700 bg-[#9AE600] text-2xl  text-black hover:bg-zinc-800 hover:text-white transition rounded-2xl px-8 py-4 font-semibold"
								>
									Shop Now
								</NavLink>

								<NavLink
									to="/main/shop"
									className="border border-zinc-700 hover:bg-[#9AE600]  text-2xl  transition hover:text-black rounded-2xl px-8 py-4 font-semibold"
								>
									View Products
								</NavLink>
							</div>
						</div>

						{/* RIGHT */}

						<div className="flex flex-col gap-6">
							<div className="rounded-3xl border border-lime-500/40 bg-lime-400/10 p-8">
								<div className="flex justify-between items-center">
									<ShoppingBag className="text-lime-400" size={30} />

									<span className="text-lime-400 text-sm">Available</span>
								</div>

								<h2 className="mt-6 text-5xl font-bold">20+</h2>

								<p className="mt-3 text-zinc-300">Products Ready</p>
							</div>

							<div className="rounded-3xl border border-zinc-700 bg-[#161616] p-8">
								<div className="flex justify-between items-center">
									<Package size={30} className="text-lime-400" />

									<Star size={20} className="text-yellow-400 fill-yellow-400" />
								</div>

								<h2 className="mt-6 text-4xl font-bold">Free Delivery</h2>

								<p className="mt-3 text-zinc-400">On orders above ₹999</p>
							</div>
						</div>
					</div>
				</section>
				{/* ================= DASHBOARD CARDS ================= */}
				<section className="mt-8">
					<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
						{/* Card 1 */}

						<div className="rounded-[30px] border border-zinc-700 bg-[#111111] p-8 hover:border-lime-400 hover:-translate-y-2 transition-all duration-300">
							<div className="w-16 h-auto rounded-2xl bg-lime-400/10 flex items-center justify-center">
								<ShoppingCart size={30} className="text-lime-400" />
							</div>

							<h2 className="mt-7 text-5xl font-bold">08 Cart Items</h2>

							<p className="mt-2 text-zinc-500">
								Products waiting for checkout
							</p>
						</div>

						{/* Card 2 */}

						<div className="rounded-[30px] border border-zinc-700 bg-[#111111] p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">
							<div className="w-16 rounded-2xl bg-blue-500/10 flex items-center justify-center">
								<TrendingUp size={30} className="text-blue-400" />
							</div>

							<h2 className="mt-7 text-5xl font-bold">₹8.4K Cart Value</h2>

							<p className="mt-2 text-zinc-500">Total amount in cart</p>
						</div>

						{/* Card 3 */}

						<div className="rounded-[30px] border border-zinc-700 bg-[#111111] p-8 hover:border-yellow-500 hover:-translate-y-2 transition-all duration-300">
							<div className="w-16 h-16 rounded-2xl bg-yellow-500/10 flex items-center justify-center">
								<Star size={30} className="text-yellow-400" />
							</div>

							<h2 className="mt-7 text-5xl font-bold">4.9 Top Rating</h2>

							<p className="mt-2 text-zinc-500">Trusted by thousands</p>
						</div>

						{/* Card 4 */}

						<div className="rounded-[30px] border border-zinc-700 bg-[#111111] p-8 hover:border-purple-500 hover:-translate-y-2 transition-all duration-300">
							<div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center">
								<Tag size={30} className="text-purple-400" />
							</div>

							<h2 className="mt-7 text-5xl font-bold">12 Categories</h2>

							<p className="mt-2 text-zinc-500">Browse every collection</p>
						</div>
					</div>
				</section>
				{/* ================= FEATURED CATEGORIES ================= */}
				<section className="mt-16">
					<div className="flex items-center justify-between mb-8">
						<div>
							<h2 className="text-4xl font-bold">Featured Categories</h2>

							<p className="text-zinc-400 mt-2">
								Explore our most popular collections.
							</p>
						</div>

						<NavLink
							to={"/main/shop"}
							className="hidden md:block border border-zinc-700 px-6 py-3 rounded-2xl hover:bg-zinc-800 transition"
						>
							View All
						</NavLink>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{/* Electronics */}

						<div
							onClick={() => navigate("/main/shop?category=electronics")}
							className="group rounded-3xl border border-zinc-700 bg-[#111111] p-8 hover:border-lime-400 transition-all duration-300 cursor-pointer"
						>
							<div className="w-16 h-16 rounded-2xl bg-lime-400/10 flex items-center justify-center group-hover:scale-110 transition">
								<Laptop className="text-lime-400" size={32} />
							</div>

							<h3 className="mt-6 text-2xl font-bold">Electronics</h3>

							<p className="mt-2 text-zinc-500">120 Products</p>
						</div>

						{/* Fashion */}

						<div
							onClick={() => navigate("/main/shop?category=women's clothing")}
							className="group rounded-3xl border border-zinc-700 bg-[#111111] p-8 hover:border-pink-500 transition-all duration-300 cursor-pointer"
						>
							<div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center group-hover:scale-110 transition">
								<Shirt className="text-pink-400" size={32} />
							</div>

							<h3 className="mt-6 text-2xl font-bold">Fashion</h3>

							<p className="mt-2 text-zinc-500">84 Products</p>
						</div>

						{/* Mobiles */}

						<div
							onClick={() => navigate("/main/shop?category=women's clothing")}
							className="group rounded-3xl border border-zinc-700 bg-[#111111] p-8 hover:border-blue-500 transition-all duration-300 cursor-pointer"
						>
							<div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition">
								<Smartphone className="text-blue-400" size={32} />
							</div>

							<h3 className="mt-6 text-2xl font-bold">Mobiles</h3>

							<p className="mt-2 text-zinc-500">60 Products</p>
						</div>

						{/* Home */}

						<div className="group rounded-3xl border border-zinc-700 bg-[#111111] p-8 hover:border-orange-500 transition-all duration-300 cursor-pointer">
							<div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition">
								<House className="text-orange-400" size={32} />
							</div>

							<h3 className="mt-6 text-2xl font-bold">Home</h3>

							<p className="mt-2 text-zinc-500">96 Products</p>
						</div>
					</div>
				</section>{" "}
				{/* ================= FEATURED PRODUCTS ================= */}
				<section className="mt-2">
					<div className="">
						<Card />
					</div>
				</section>
				{/* ================= CTA ================= */}
				<section className="mt-20 rounded-[35px] border border-zinc-700 bg-[#111111] p-10 md:p-16 text-center">
					<h2 className="text-4xl md:text-5xl font-bold">
						Ready to Start Shopping?
					</h2>

					<p className="text-zinc-400 max-w-2xl mx-auto mt-5 text-lg leading-8">
						Explore hundreds of products with premium quality, fast delivery and
						secure checkout.
					</p>

					<button className="mt-10 bg-lime-400 hover:bg-lime-300 transition text-black font-bold px-10 py-4 rounded-2xl flex items-center gap-3 mx-auto">
						Shop Now
						<ArrowRight size={22} />
					</button>
				</section>
			</div>
		);
 }

 export default Home;