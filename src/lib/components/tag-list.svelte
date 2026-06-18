<script>
	let { tags, variant = 'default', class: className = '' } = $props();
</script>

<ul class="tag-list {className}" role="list">
	{#each tags as tag}
		<li
			class="tag-pill"
			class:tag-pill--emphasized={variant === 'emphasized'}
		>
			{tag}
		</li>
	{/each}
</ul>
