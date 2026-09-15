import {
	Search,
	SlidersHorizontal,
	Laptop,
	Smartphone,
	Shirt,
	House,
	Watch,
	Gamepad2,
	Headphones,
} from "lucide-react";
import Card from "./subShop/Card";

function Shop() {
	return (
		<div className="min-h-screen bg-[#0d0d0d] text-white px-4 sm:px-6 lg:px-8 py-8">
			{/* ================= HERO ================= */}

			<section className="relative overflow-hidden rounded-[35px] border border-zinc-700 bg-[#111111]">
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

				<div className="relative py-20 px-8 lg:px-16 text-center">
					<p className="uppercase tracking-[6px] text-lime-400 font-semibold">
						SkyMart Store
					</p>

					<h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold">
						Find Everything
						<br />
						<span className="text-lime-400">You Need.</span>
					</h1>

					<p className="mt-8 max-w-3xl mx-auto text-zinc-400 text-lg leading-8">
						Discover premium gadgets, fashion, electronics, accessories and much
						more at unbeatable prices.
					</p>
				</div>
			</section>

			{/* ================= CATEGORIES ================= */}

			<section className="mt-12">
				<div className="flex items-center justify-between">
					<div>
						<h2 className="text-3xl font-bold">Shop By Category</h2>

						<p className="text-zinc-400 mt-2">
							Browse your favourite collections.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-5 mt-8">
					<div
						onClick={() => navigate("/main/shop?category=electronics")}
						className="group cursor-pointer rounded-3xl border border-zinc-700 bg-[#111111] p-6 hover:border-lime-400 transition"
					>
						<div className="w-16 h-16 mx-auto rounded-2xl bg-lime-400/10 flex items-center justify-center group-hover:scale-110 transition">
							<Laptop className="text-lime-400" size={30} />
						</div>

						<h3 className="mt-5 text-center font-semibold">Laptops</h3>
					</div>

					<div className="group cursor-pointer rounded-3xl border border-zinc-700 bg-[#111111] p-6 hover:border-blue-500 transition">
						<div className="w-16 h-16 mx-auto rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition">
							<Smartphone className="text-blue-400" size={30} />
						</div>

						<h3 className="mt-5 text-center font-semibold">Mobiles</h3>
					</div>

					<div className="group cursor-pointer rounded-3xl border border-zinc-700 bg-[#111111] p-6 hover:border-pink-500 transition">
						<div className="w-16 h-16 mx-auto rounded-2xl bg-pink-500/10 flex items-center justify-center group-hover:scale-110 transition">
							<Shirt className="text-pink-400" size={30} />
						</div>

						<h3 className="mt-5 text-center font-semibold">Fashion</h3>
					</div>

					<div className="group cursor-pointer rounded-3xl border border-zinc-700 bg-[#111111] p-6 hover:border-orange-500 transition">
						<div className="w-16 h-16 mx-auto rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition">
							<House className="text-orange-400" size={30} />
						</div>

						<h3 className="mt-5 text-center font-semibold">Home</h3>
					</div>

					<div className="group cursor-pointer rounded-3xl border border-zinc-700 bg-[#111111] p-6 hover:border-yellow-500 transition">
						<div className="w-16 h-16 mx-auto rounded-2xl bg-yellow-500/10 flex items-center justify-center group-hover:scale-110 transition">
							<Watch className="text-yellow-400" size={30} />
						</div>

						<h3 className="mt-5 text-center font-semibold">Watches</h3>
					</div>

					<div className="group cursor-pointer rounded-3xl border border-zinc-700 bg-[#111111] p-6 hover:border-purple-500 transition">
						<div className="w-16 h-16 mx-auto rounded-2xl bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition">
							<Gamepad2 className="text-purple-400" size={30} />
						</div>

						<h3 className="mt-5 text-center font-semibold">Gaming</h3>
					</div>

					<div className="group cursor-pointer rounded-3xl border border-zinc-700 bg-[#111111] p-6 hover:border-cyan-500 transition">
						<div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition">
							<Headphones className="text-cyan-400" size={30} />
						</div>

						<h3 className="mt-5 text-center font-semibold">Audio</h3>
					</div>
				</div>
			</section>
			<Card />
		</div>
	);
}

export default Shop;
