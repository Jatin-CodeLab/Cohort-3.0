import React from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addTodo, removeTodo, updateTodo, } from "../features/todo/todoSlice";

function AddTodo() {
	let dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	let addTodoForm = (data) => {
		let dataa = dispatch(addTodo(data.todo));
		reset();
	};

	return (
		<div>
			{/* Form */}
			<form
				onSubmit={handleSubmit(addTodoForm)}
				className="mt-8 flex flex-col sm:flex-row gap-4"
			>
				<input
					{...register("todo", { required: "Please Enter Todo" })}
					type="text"
					placeholder="Enter your todo..."
					className="w-[90%] flex-1 px-5 py-4 rounded-2xl bg-[#1b1b1b] border border-zinc-700 text-white outline-none focus:border-lime-400"
				/>

				{errors.todo && (
					<p className="text-red-500 text-lg">{errors.todo.message}</p>
				)}

				<button
					type="submit"
					className="bg-lime-400 hover:bg-lime-300 text-black font-bold px-8 py-4 rounded-2xl"
				>
					Add Todo
				</button>
			</form>
		</div>
	);
}

export default AddTodo;
