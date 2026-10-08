import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

function App() {
	const { register, handleSubmit } = useForm();

	const submitHandler = async (data) => {
		const formData = new FormData();

		formData.append("name", data.name);
		formData.append("email", data.email);
		formData.append("profilePic", data.profpic[0]);

		await axios.post("http://localhost:3000/user/create", formData);
	};

	return (
		<div>
			<form className="flex flex-col" onSubmit={handleSubmit(submitHandler)}>
				<input {...register("name")} type="text" placeholder="enter name" />
				<input {...register("email")} type="email" placeholder="enter email" />
				<input {...register("profpic")} type="file" placeholder="enter pic" />
				<input type="submit" placeholder="enter pic" />
			</form>
		</div>
	);
}

export default App;
