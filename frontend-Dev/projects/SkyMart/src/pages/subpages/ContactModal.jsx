import { X, User, Mail, FileText, MessageSquare } from "lucide-react";

import { useForm } from "react-hook-form";
    

function ContactModal({ isOpen, onClose }) {
    if (!isOpen) return null;
    let {
			register,
			handleSubmit,
			reset,
			formState: { errors },
		} = useForm();
    
    let formSubmite = (data) => {
        console.log(data);
        reset()
    }

    return (
			<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
				<div className="relative w-full max-w-2xl rounded-3xl border border-zinc-700 bg-[#121212] p-8 shadow-2xl">
					{/* Close Button */}
					<button
						onClick={onClose}
						className="absolute right-5 top-5 rounded-xl border border-zinc-700 p-2 hover:bg-zinc-800 transition"
					>
						<X size={20} />
					</button>

					{/* Heading */}
					<h2 className="text-4xl font-bold text-white">
						Contact <span className="text-lime-400">SkyMart</span>
					</h2>

					<p className="mt-3 text-zinc-400">
						Have a question? We'd love to hear from you.
					</p>

					<form onSubmit={handleSubmit(formSubmite)} className="mt-8 space-y-5">
						{/* Name */}
						<div className="relative">
							<User
								size={20}
								className="absolute left-3 top-7 -translate-y-1/2 text-zinc-500"
							/>

							<input
								{...register("name", { required: "name is required !" })}
								type="text"
								placeholder="Full Name"
								className="w-full rounded-2xl border border-zinc-700 bg-[#1b1b1b] py-4 pl-12 pr-4 text-white outline-none focus:border-lime-400"
							/>
							{errors.name && (
								<p className="text-red-500 m-2 text-start">
									{errors.name.message}
								</p>
							)}
						</div>

						{/* Email */}
						<div className="relative">
							<Mail
								size={20}
								className="absolute left-3 top-7 -translate-y-1/2 text-zinc-500"
							/>
							<input
								{...register("email", { required: "email is required !" })}
								type="email"
								placeholder="Email Address"
								className="w-full rounded-2xl border border-zinc-700 bg-[#1b1b1b] py-4 pl-12 pr-4 text-white outline-none focus:border-lime-400"
							/>
							{errors.email && (
								<p className="text-red-500 m-2 text-start">
									{errors.email.message}
								</p>
							)}
						</div>

						{/* Subject */}
						<div className="relative">
							<FileText
								size={20}
								className="absolute left-3 top-7 -translate-y-1/2 text-zinc-500"
							/>

							<input
								{...register("Subject", { required: "Subject is required !" })}
								type="text"
								placeholder="Subject"
								className="w-full rounded-2xl border border-zinc-700 bg-[#1b1b1b] py-4 pl-12 pr-4 text-white outline-none focus:border-lime-400"
							/>
							{errors.Subject && (
								<p className="text-red-500 m-2 text-start">
									{errors.Subject.message}
								</p>
							)}
						</div>

						{/* Message */}
						<div className="relative">
							<MessageSquare
								size={20}
								className="absolute left-3 top-3 text-zinc-500"
							/>

							<textarea
								{...register("message", { required: "message is required !" })}
								rows="5"
								placeholder="Write your message..."
								className="w-full resize-none rounded-2xl border border-zinc-700 bg-[#1b1b1b] py-4 pl-12 pr-4 text-white outline-none focus:border-lime-400"
							/>
							{errors.message && (
								<p className="text-red-500 m-2 text-start">
									{errors.message.message}
								</p>
							)}
						</div>

						{/* Buttons */}
						<div className="flex flex-col-reverse sm:flex-row justify-end gap-4 pt-2">
							<button
								type="button"
								onClick={onClose}
								className="rounded-2xl border border-zinc-700 px-6 py-3 text-white hover:bg-zinc-800 transition"
							>
								Cancel
							</button>

							<button
								type="submit"
								className="rounded-2xl bg-lime-400 px-6 py-3 font-bold text-black hover:bg-lime-300 transition"
							>
								Send Message
							</button>
						</div>
					</form>
				</div>
			</div>
		);
}

export default ContactModal;
