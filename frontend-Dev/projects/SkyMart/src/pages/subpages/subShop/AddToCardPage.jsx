import {
	Minus,
	Plus,
    Trash2,
    Star,
	ShoppingBag,
	ArrowRight,
	Tag,
} from "lucide-react";
import { useContext } from "react";
import { Auth } from "../../../Context/AppContext";

function AddToCardPage() {
const { cartItems, setCartItems, loggedInUsers } = useContext(Auth);

		
  const subtotal = cartItems.reduce(
		(total, item) => total + item.price * (item.quantity || 1),
		0,
	);

		const shipping = subtotal > 999 ? 0 : 65;

		const tax = subtotal * 0.05;

    const total = subtotal + shipping + tax;
    
	return (
		<div className="min-h-screen bg-[#0d0d0d] text-white p-4 sm:p-6 lg:p-8">
			{/* Heading */}

			<div className="mb-10">
				<h1 className="text-5xl font-bold">
					Shopping <span className="text-lime-400">Cart</span>
				</h1>

				<p className="text-zinc-400 mt-3">
					Review your selected products before checkout.
				</p>
			</div>

			<div className="grid lg:grid-cols-3 gap-8">
				{/* Left */}

				<div className="lg:col-span-2 space-y-6">
					{/* Product */}

					{cartItems.map((item) => (
						<div
							key={item.id}
							className="bg-[#111111] border border-zinc-700 rounded-3xl p-6 flex flex-col md:flex-row gap-6"
						>
							<div className="w-full md:w-44 h-44 bg-white rounded-2xl p-5 flex items-center justify-center">
								<img
									src={item.image}
									alt={item.title}
									className="h-full object-contain"
								/>
							</div>

							<div className="flex-1">
								<p className="text-lime-400 capitalize">{item.category}</p>

								<h2 className="text-2xl font-bold mt-2">{item.title}</h2>

								<div className="flex items-center gap-2 mt-3">
									<Star size={18} className="fill-yellow-400 text-yellow-400" />

									<span>{item.rating.rate}</span>
								</div>

								<h3 className="text-3xl text-lime-400 font-bold mt-5">
									₹ {item.price}
								</h3>

								<div className="flex items-center justify-between mt-8">
									<div className="flex items-center gap-3 border border-zinc-700 rounded-xl px-4 py-2">
										<button
											onClick={() => {
												if (item.quantity === 1) {
													setCartItems(
														cartItems.filter(
															(product) => product.id !== item.id,
														),
													);
												} else {
													setCartItems(
														cartItems.map((product) =>
															product.id === item.id
																? {
																		...product,
																		quantity: (product.quantity || 1) - 1,
																	}
																: product,
														),
													);
												}
											}}
										>
											<Minus />
										</button>

										<span>{item.quantity}</span>

										<button
											onClick={() =>
												setCartItems(
													cartItems.map((product) =>
														product.id === item.id
															? {
																	...product,
																	quantity: (product.quantity || 1) + 1,
																}
															: product,
													),
												)
											}
										>
											<Plus />
										</button>
									</div>

									<button
										onClick={() =>
											setCartItems(
												cartItems.filter((product) => product.id !== item.id),
											)
										}
										className="bg-red-500 hover:bg-red-600 p-3 rounded-xl"
									>
										<Trash2 />
									</button>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Right */}

				<div>
					<div className="bg-[#111111] border border-zinc-700 rounded-3xl p-8 sticky top-8">
						<h2 className="text-3xl font-bold">Order Summary</h2>

						<div className="space-y-5 mt-8">
							<div className="flex justify-between">
								<span className="text-zinc-400">Subtotal</span>

								<span>₹ {subtotal.toFixed(2)}</span>
							</div>

							<div className="flex justify-between">
								<span className="text-zinc-400">Shipping</span>

								<span className="text-lime-400">
									{shipping === 0 ? "Free" : `₹ ${shipping}`}
								</span>
							</div>

							<div className="flex justify-between">
								<span className="text-zinc-400">Tax</span>

								<span>₹ {tax.toFixed(2)}</span>
							</div>

							<hr className="border-zinc-700" />

							<div className="flex justify-between text-2xl font-bold">
								<span>Total</span>

								<span className="text-lime-400">₹ {total.toFixed(2)}</span>
							</div>
						</div>

						<div className="mt-8 flex gap-3">
							<input
								type="text"
								placeholder="Coupon Code"
								className="flex-1 bg-[#181818] border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-lime-400"
							/>

							<button className="bg-lime-400 text-black px-5 rounded-xl">
								<Tag />
							</button>
						</div>

						<button
							onClick={() => {
								setCartItems([]);
							localStorage.removeItem(`cartItems_${loggedInUsers.email}`);
							}}
							disabled={cartItems.length === 0}
							className={`w-full mt-8 py-4 rounded-2xl font-bold flex justify-center items-center gap-3 ${
								cartItems.length === 0
									? "bg-zinc-700 cursor-not-allowed"
									: "bg-lime-400 hover:bg-lime-300 text-black"
							}`}
						>
							Proceed To Checkout
							<ArrowRight />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddToCardPage;
