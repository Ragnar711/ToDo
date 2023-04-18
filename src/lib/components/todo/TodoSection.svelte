<script>
    import TodoInput from "./TodoInput.svelte";
    import {todos} from "../../store/TodoStore"
</script>

<section>
    {#each $todos as todo(todo.id)}
        <TodoInput {todo}/>
    {/each}
</section>