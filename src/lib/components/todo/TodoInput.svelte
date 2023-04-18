<script>
	import { deleteTodo, toggleComplete, editTodo } from '../../store/TodoStore';
	export let todo;
	$: completeClass = todo.complete ? 'bg-green-300' : 'bg-orange-200';
</script>

<div class="flex items-center justify-between rounded-md border-2 border-gray-100 p-5 mt-2">
	<div>
		<label class="sr-only" for={`${todo.id}-checkbox`}>Complete Todo</label>
		<input
			class="h-4 w-4 rounded border-gray-500 text-green-400 focus:border-green-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-color-green-500"
			id={`${todo.id}-checkbox`}
			type="checkbox"
			checked={todo.complete}
			on:change={() => {
				toggleComplete(todo.id);
			}}
		/>
		<label class="sr-only" for={`${todo.id}-text`}>Edit Todo</label>
		<input
			class="mx-5 flex-1 text-ellipsis rounded-none border-x-0 border-t-0 border-b border-dashed border-b-gray-400 px-0 pb-1 text-base font-normal text-black placeholder::text-gray-200 focus:border-gray-600 focus:outline-none focus:ring-0"
			id={`${todo.id}-text`}
			type="text"
			placeholder="Enter a Task"
			value={todo.text}
			on:input={(e) => {
				editTodo(todo.id, e.target.value);
			}}
		/>
	</div>
	<span
		class="{completeClass} ml-5 hidden rounded-full px-3 py-1.5 text-gray-500 text-center text-small font-normal md:block"
		>{todo.complete ? 'Complete' : 'In progress'}</span
	>
	<button class="hover:text-red-500" type="button" on:click={() => deleteTodo(todo.id)}
		>Delete Task (x)</button
	>
</div>
