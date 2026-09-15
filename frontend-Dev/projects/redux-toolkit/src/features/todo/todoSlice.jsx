import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
	todos: JSON.parse(localStorage.getItem("todos")) || [],
};


export const todoslice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: nanoid(),
				text: action.payload,
			};
			state.todos.push(todo);
			localStorage.setItem("todos", JSON.stringify(state.todos));
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => {
				return todo.id !== action.payload;
			});
			localStorage.setItem("todos", JSON.stringify(state.todos));
		},
		updateTodo: (state, action) => {
			const { id, text } = action.payload;
			const todo = state.todos.find((todo) => todo.id === id);

			if (todo) {
				todo.text = text;
			}
			localStorage.setItem("todos", JSON.stringify(state.todos));
		},
	},
});


export const { addTodo, removeTodo, updateTodo } = todoslice.actions;
export default todoslice.reducer