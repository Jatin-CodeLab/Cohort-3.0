import React, { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todo() {
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();
	const [editId, setEditId] = useState(null);
	const [editText, setEditText] = useState("");

	return (
		<div>
			{/* Todo List */}
			<div className="mt-8 space-y-4">
				{todos.map((todo) => (
					<div
						key={todo.id}
						className="flex justify-between items-center bg-[#1b1b1b] border border-zinc-700 rounded-2xl px-5 py-4"
					>
						{editId === todo.id ? (
							<input
								type="text"
								value={editText}
								onChange={(e) => setEditText(e.target.value)}
								className="flex-1 mr-4 bg-zinc-800 border border-zinc-600 rounded-lg px-3 py-2 text-white outline-none"
							/>
						) : (
							<p className="text-white">{todo.text}</p>
						)}

						
						<div className="flex gap-3">
							{editId === todo.id ? (
								<button
									onClick={() => {
										dispatch(
											updateTodo({
												id: todo.id,
												text: editText,
											}),
										);

										setEditId(null);
										setEditText("");
									}}
									className="bg-green-500 hover:bg-green-600 p-3 rounded-xl"
								>
									Save
								</button>
							) : (
								<button
									onClick={() => {
										setEditId(todo.id);
										setEditText(todo.text);
									}}
									className="bg-blue-500 hover:bg-blue-600 p-3 rounded-xl"
								>
									<Pencil size={18} />
								</button>
							)}

							

							<button
								onClick={() => dispatch(removeTodo(todo.id))}
								type="button"
								className="bg-red-500 hover:bg-red-600 p-3 rounded-xl"
							>
								<Trash2 size={18} />
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Todo;
