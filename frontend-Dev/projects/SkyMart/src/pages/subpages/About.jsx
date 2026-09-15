import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import ContactModal from "./ContactModal";
import {
	Zap,
	Users,
	Star,
	Truck,
	ShieldCheck,
	HeartHandshake,
	ShoppingBag,
	Award,
} from "lucide-react";

function AboutPage() {

const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="min-h-screen bg-[#0d0d0d] text-white px-5 py-14">
			<div className="max-w-6xl mx-auto">
				{/* Hero */}

				<div className="flex flex-col items-center text-center">
					<div className="w-14 h-14 rounded-2xl bg-lime-400 flex items-center justify-center">
						<Zap className="text-black" size={28} />
					</div>

					<h1 className="mt-6 text-5xl md:text-6xl font-bold">
						About <span className="text-lime-400">SkyMart</span>
					</h1>

					<p className="mt-5 max-w-3xl text-zinc-400 text-lg leading-8">
						SkyMart is a next-generation e-commerce platform built to make
						online shopping fast, fair, and enjoyable for everyone.
					</p>
				</div>

				{/* Stats */}

				<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
					<div className="border border-zinc-700 rounded-2xl p-8 text-center hover:border-lime-400 duration-300">
						<div className="flex justify-center">
							<Zap className="text-lime-400" />
						</div>

						<h2 className="text-4xl font-bold mt-4">20K+</h2>

						<p className="text-zinc-500 mt-2">Products</p>
					</div>

					<div className="border border-zinc-700 rounded-2xl p-8 text-center hover:border-lime-400 duration-300">
						<div className="flex justify-center">
							<Users className="text-lime-400" />
						</div>

						<h2 className="text-4xl font-bold mt-4">50K+</h2>

						<p className="text-zinc-500 mt-2">Happy Customers</p>
					</div>

					<div className="border border-zinc-700 rounded-2xl p-8 text-center hover:border-lime-400 duration-300">
						<div className="flex justify-center">
							<Star className="text-lime-400" />
						</div>

						<h2 className="text-4xl font-bold mt-4">4.9</h2>

						<p className="text-zinc-500 mt-2">Average Rating</p>
					</div>

					<div className="border border-zinc-700 rounded-2xl p-8 text-center hover:border-lime-400 duration-300">
						<div className="flex justify-center">
							<Truck className="text-lime-400" />
						</div>

						<h2 className="text-4xl font-bold mt-4">99%</h2>

						<p className="text-zinc-500 mt-2">On-time Delivery</p>
					</div>
				</div>

				{/* Our Story */}

				<div className="mt-20 border border-zinc-700 rounded-3xl p-10">
					<h2 className="text-4xl font-bold">Our Story</h2>

					<div className="mt-8 space-y-6 text-zinc-400 leading-8 text-lg">
						<p>
							SkyMart started in 2022 as a small side project with one simple
							goal: make online shopping easier, faster, and more enjoyable for
							everyone.
						</p>

						<p>
							Today, thousands of customers trust SkyMart every day for
							electronics, fashion, accessories, home essentials, and much more.
						</p>

						<p>
							Our team believes shopping should be simple, transparent, and
							affordable. Every product is chosen with quality in mind, and
							every order is handled with care.
						</p>

						<p>
							We're just getting started, and we're excited to build the future
							of online shopping with you.
						</p>
					</div>
				</div>

				{/* What We Stand For */}

				<div className="mt-20">
					<h2 className="text-4xl font-bold text-center">What We Stand For</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
						{/* Card 1 */}
						<div className="border border-zinc-700 rounded-3xl p-8 hover:border-lime-400 transition">
							<div className="w-12 h-12 rounded-xl bg-lime-400/10 flex items-center justify-center">
								<ShieldCheck className="text-lime-400" size={24} />
							</div>

							<h3 className="text-2xl font-bold mt-6">Trust</h3>

							<p className="text-zinc-400 mt-3 leading-7">
								Every product is verified for quality and authenticity before
								being listed on our platform.
							</p>
						</div>

						{/* Card 2 */}
						<div className="border border-zinc-700 rounded-3xl p-8 hover:border-lime-400 transition">
							<div className="w-12 h-12 rounded-xl bg-lime-400/10 flex items-center justify-center">
								<Truck className="text-lime-400" size={24} />
							</div>

							<h3 className="text-2xl font-bold mt-6">Speed</h3>

							<p className="text-zinc-400 mt-3 leading-7">
								Lightning-fast delivery with real-time tracking so your order
								arrives exactly when expected.
							</p>
						</div>

						{/* Card 3 */}
						<div className="border border-zinc-700 rounded-3xl p-8 hover:border-lime-400 transition">
							<div className="w-12 h-12 rounded-xl bg-lime-400/10 flex items-center justify-center">
								<HeartHandshake className="text-lime-400" size={24} />
							</div>

							<h3 className="text-2xl font-bold mt-6">Community</h3>

							<p className="text-zinc-400 mt-3 leading-7">
								We grow with our customers by listening to feedback and
								continuously improving our services.
							</p>
						</div>

						{/* Card 4 */}
						<div className="border border-zinc-700 rounded-3xl p-8 hover:border-lime-400 transition">
							<div className="w-12 h-12 rounded-xl bg-lime-400/10 flex items-center justify-center">
								<Award className="text-lime-400" size={24} />
							</div>

							<h3 className="text-2xl font-bold mt-6">Quality</h3>

							<p className="text-zinc-400 mt-3 leading-7">
								We believe in delivering premium products that provide the best
								value for money.
							</p>
						</div>
					</div>
				</div>

				{/* Meet The Team */}

				<div className="mt-20">
					<h2 className="text-4xl font-bold text-center">Meet The Team</h2>

					<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
						{/* Member 1 */}
						<div className="border border-zinc-700 rounded-3xl p-8 text-center hover:border-lime-400 transition">
							<div className="w-16 h-16 rounded-full bg-lime-400 text-black font-bold text-2xl flex items-center justify-center mx-auto">
								A
							</div>

							<h3 className="text-xl font-bold mt-5">Aryan Shah</h3>

							<p className="text-zinc-500 mt-2">Founder & CEO</p>
						</div>

						{/* Member 2 */}
						<div className="border border-zinc-700 rounded-3xl p-8 text-center hover:border-lime-400 transition">
							<div className="w-16 h-16 rounded-full bg-blue-500 text-white font-bold text-2xl flex items-center justify-center mx-auto">
								P
							</div>

							<h3 className="text-xl font-bold mt-5">Priya Mehta</h3>

							<p className="text-zinc-500 mt-2">Head of Product</p>
						</div>

						{/* Member 3 */}
						<div className="border border-zinc-700 rounded-3xl p-8 text-center hover:border-lime-400 transition">
							<div className="w-16 h-16 rounded-full bg-purple-500 text-white font-bold text-2xl flex items-center justify-center mx-auto">
								R
							</div>

							<h3 className="text-xl font-bold mt-5">Rohan Verma</h3>

							<p className="text-zinc-500 mt-2">Lead Engineer</p>
						</div>

						{/* Member 4 */}
						<div className="border border-zinc-700 rounded-3xl p-8 text-center hover:border-lime-400 transition">
							<div className="w-16 h-16 rounded-full bg-rose-500 text-white font-bold text-2xl flex items-center justify-center mx-auto">
								S
							</div>

							<h3 className="text-xl font-bold mt-5">Sneha Kapoor</h3>

							<p className="text-zinc-500 mt-2">Design Director</p>
						</div>
					</div>
				</div>

				{/* CTA Section */}

				<div className="mt-20 mb-10">
					<div className="border border-zinc-700 rounded-3xl p-10 md:p-16 text-center bg-gradient-to-b from-[#111111] to-[#0d0d0d]">
						<div className="w-16 h-16 rounded-2xl bg-lime-400 flex items-center justify-center mx-auto">
							<ShoppingBag className="text-black" size={30} />
						</div>

						<h2 className="text-4xl md:text-5xl font-bold mt-8">
							Ready to Shop?
						</h2>

						<p className="text-zinc-400 max-w-2xl mx-auto mt-5 text-lg leading-8">
							Join thousands of happy customers who trust SkyMart for quality
							products, amazing prices, and lightning-fast delivery. Start
							exploring today.
						</p>

						<div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
							<NavLink
								to="/main/shop"
								className={({ isActive }) =>
									`px-8 py-4 border rounded-2xl font-semibold transition ${
										isActive
											? "bg-lime-400 text-black border-lime-400"
											: "border-zinc-700 text-white hover:bg-zinc-800 hover:border-lime-400"
									}`
								}
							>
								Shop
							</NavLink>

							<button
								onClick={() => setIsOpen(true)}
								className="px-8 py-4 border border-zinc-700 rounded-2xl text-white font-semibold hover:bg-zinc-800 transition"
							>
								Contact Us
							</button>
							<ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutPage;
