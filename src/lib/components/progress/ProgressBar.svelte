<script>
    export let title;
    export let percentage
    
    $: completeClass = title === 'Completed' ? 'bg-green-300' : 'bg-orange-200';
</script>

<div>
    <div class="flex justify-normal text-base font-normal text-black">
        <p>{title}</p>
    </div>
    <div class="mt-5 h-4 w-full overflow-hidden rounded-full bg-gray-300">
        <div class="{completeClass} h-4 rounded-full transition-all duration-500 ease-out" style="width: {percentage}%"></div>
    </div>
</div>