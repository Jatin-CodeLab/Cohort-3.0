
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {

	return (
		<div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center p-5">
			<div className="w-full max-w-3xl bg-[#111111] border border-zinc-700 rounded-3xl p-8">
				{/* Heading */}
				<h1 className="text-4xl font-bold text-center text-white">Todo App</h1>

				<p className="text-center text-zinc-400 mt-2">
					Manage your daily tasks
				</p>
				<AddTodo />
				<Todo/>
			</div>
		</div>
	);
}

export default App;
