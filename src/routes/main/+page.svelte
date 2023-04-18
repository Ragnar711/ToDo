<script>
	import AddTodoSection from '../../lib/components/todo/AddTodoSection.svelte';
	import TodoSection from '../../lib/components/todo/TodoSection.svelte';
	import ProgressSection from '../../lib/components/progress/ProgressSection.svelte';
</script>

<div class="min-h-screen p-0 bg-green-100 selection:bg-green-200 md:py-24 md:px-8">
	<main
		class="mx-auto min-h-screen max-w-none rounded-none bg-white px-5 py-10 outline-none md:min-h-max md:max-w-[60rem] md:rounded-2xl md:px-8 md:outline md:outline-4 md:outline-offset-8 md:outline-green-400"
	>
		<h1 class="text-2xl font-bold text-black">Dashboard</h1>
		<div class="mt-10">
			<AddTodoSection />
			<div class="bg-white mt-8 px-4 py-2">
				<TodoSection />
			</div>
			<ProgressSection />
		</div>
	</main>
</div>
