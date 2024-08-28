<script>
	import { addTodo, getDoneTodos, getUndoneTodos } from '../../store/TodoStore';
</script>

<section class="flex justify-between">
	<h3 class="text-xl font-bold text-black">Checklist</h3>
	<button
		class="group flex items-center rounded-md border-green-400 px-6 py-3 text-lg font-semibold text-black outline outline-2 outline-offset-2 outline-green-200 hover:text-white hover:outline-white hover:bg-green-500 focus-visible:text-green-500 focus-visible:outline-green-500"
		type="button"
		on:click={getDoneTodos}>Done</button
	>
	<button
		class="group flex items-center rounded-md border-green-400 px-6 py-3 text-lg font-semibold text-black outline outline-2 outline-offset-2 outline-green-200 hover:text-white hover:outline-white hover:bg-green-500 focus-visible:text-green-500 focus-visible:outline-green-500"
		type="button"
		on:click={getUndoneTodos}>Undone</button>
	<button
		class="group flex items-center rounded-md border-green-400 px-6 py-3 text-lg font-semibold text-black outline outline-2 outline-offset-2 outline-green-200 hover:text-white hover:outline-white hover:bg-green-500 focus-visible:text-green-500 focus-visible:outline-green-500"
		type="button"
		on:click={addTodo}>Add Task (+)</button
	>
</section>
