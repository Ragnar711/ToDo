<script>
	import { goto } from '$app/navigation';
	import { addTodo } from '../../store/TodoStore';
	import { auth } from '../../config';
	import { signOut } from '@firebase/auth';
	const logout = async () => {
		await signOut(auth).then(() => goto('/'));
	};
</script>

<section class="flex justify-between">
	<h3 class="text-xl font-bold text-black">Checklist</h3>
	<button
		class="group flex items-center rounded-md border-green-400 px-6 py-3 text-lg font-semibold text-black outline outline-2 outline-offset-2 outline-green-200 hover:text-white hover:outline-white hover:bg-green-500 focus-visible:text-green-500 focus-visible:outline-green-500"
		type="button"
		on:click={addTodo}>Add Task (+)</button
	>
	<button
		class="group flex items-center rounded-md border-green-400 px-6 py-3 text-lg font-semibold text-black outline outline-2 outline-offset-2 outline-green-200 hover:text-white hover:outline-white hover:bg-green-500 focus-visible:text-green-500 focus-visible:outline-green-500"
		on:click={logout}>Logout</button
	>
</section>
