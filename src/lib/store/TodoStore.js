import { v4 as uuidv4 } from 'uuid';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const data = browser ? JSON.parse(window.localStorage.getItem('st-todo-list')) ?? [] : [];
export const todos = writable(data);

todos.subscribe((value) => {
	if (browser) {
		localStorage.setItem('st-todo-list', JSON.stringify(value));
	}
});

export const getDoneTodos = () => {
	let doneTodos = [];
	todos.subscribe((value) => {
		doneTodos = value.filter((todo) => todo.complete);
	})();
	return doneTodos;
};

export const getUndoneTodos = () => {
	let undoneTodos = [];
	todos.subscribe((value) => {
		undoneTodos = value.filter((todo) => !todo.complete);
	})();
	return undoneTodos;
};

export const addTodo = () => {
	todos.update((currentTodos) => {
		return [...currentTodos, { id: uuidv4(), text: '', complete: false }];
	});
};

export const deleteTodo = (id) => {
	todos.update((currentTodos) => {
		return currentTodos.filter((todo) => {
			return todo.id !== id;
		});
	});
};

export const toggleComplete = (id) => {
	todos.update((currentTodos) => {
		return currentTodos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, complete: !todo.complete };
			}
			return todo;
		});
	});
};

export const editTodo = (id, text) => {
	todos.update((currentTodos) => {
		return currentTodos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, text };
			}
			return todo;
		});
	});
};
