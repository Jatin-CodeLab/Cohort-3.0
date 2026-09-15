import { Heart, ShoppingCart, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Auth } from "../../../Context/AppContext";

function Card() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
const { cartItems, setCartItems, loggedInUsers } = useContext(Auth);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch("https://fakestoreapi.com/products");
				const data = await response.json();
				setProducts(data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);
useEffect(() => {
	if (loggedInUsers) {
		localStorage.setItem(
			`cartItems_${loggedInUsers.email}`,
			JSON.stringify(cartItems),
		);
	}
}, [cartItems, loggedInUsers]);


	if (loading) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-[#0d0d0d] text-white text-3xl">
				Loading Products...
			</div>
		);
	}

	return (
		<div className="px-4 py-10 text-white">
			{/* Heading */}

			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
				<div>
					<h1 className="text-4xl font-bold">
						Our <span className="text-lime-400">Products</span>
					</h1>

					<p className="text-zinc-400 mt-2">
						Explore premium quality products.
					</p>
				</div>

				<input
					type="text"
					placeholder="Search Product..."
					className="bg-[#181818] border border-zinc-700 rounded-2xl px-5 py-3 outline-none focus:border-lime-400 w-full md:w-80"
				/>
			</div>

			{/* Products */}

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
				{products.map((product) => {
					const isInCart = cartItems.some((item) => item.id === product.id);

					return (
						<div
							key={product.id}
							className="bg-[#111111] border border-zinc-700 rounded-3xl overflow-hidden hover:border-lime-400"
						>
							{/* Image */}
							<div className="h-64 bg-white p-6 flex items-center justify-center">
								<img
									src={product.image}
									alt={product.title}
									className="h-full object-contain"
								/>
							</div>

							{/* Details */}
							<div className="p-6">
								<span className="text-lime-400">{product.category}</span>

								<h2 className="text-xl font-bold mt-2">{product.title}</h2>

								<p className="text-zinc-400 mt-3 line-clamp-2">
									{product.description}
								</p>

								<div className="flex items-center gap-2 mt-3">
									<Star size={18} className="fill-yellow-400 text-yellow-400" />

									<span>{product.rating.rate}</span>
								</div>

								<h3 className="text-3xl font-bold text-lime-400 mt-5">
									₹ {product.price}
								</h3>

								{/* Button */}
								<div className="mt-6">
									<div className="mt-6">
										<button
											onClick={() => {
												const existingProduct = cartItems.find(
													(item) => item.id === product.id,
												);

												if (existingProduct) {
													setCartItems(
														cartItems.map((item) =>
															item.id === product.id
																? {
																		...item,
																		quantity: (item.quantity || 1) + 1,
																	}
																: item,
														),
													);
												} else {
													setCartItems([
														...cartItems,
														{
															...product,
															quantity: 1,
														},
													]);
												}
											}}
											className={`w-full py-3 rounded-xl font-bold transition ${
												isInCart
													? "bg-green-500 hover:bg-green-600 text-white"
													: "bg-lime-400 hover:bg-lime-300 text-black"
											}`}
										>
											<ShoppingCart size={18} className="inline mr-2" />

											{isInCart ? "Add One More" : "Add To Cart"}
										</button>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Card;
