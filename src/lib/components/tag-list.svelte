<script>
	let { tags, class: className = '' } = $props();
</script>

<ul class="flex flex-wrap gap-2 {className}">
	{#each tags as tag}
		<li class="tag-pill">{tag}</li>
	{/each}
</ul>
