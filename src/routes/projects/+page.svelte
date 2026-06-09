<script>
	import Projectshero from '../../lib/components/projectshero.svelte';
	import Project from '../../lib/cards/project.svelte';
	import Seo from '../../lib/components/seo.svelte';
	import { fade } from 'svelte/transition';

	let { data } = $props();
	let repos = $derived(data.repos);
</script>

<Seo
	title="Projects | Chase Martin"
	description="Here are the software and data projects I'm currently working on, updated automatically from the GitHub REST API."
	keywords="Chase Martin, Projects, Code, Programming, Data, GitHub, Repositories, API"
	type="WebPage"
/>

<div in:fade|global={{ duration: 800 }}>
	<Projectshero />
	<div class="page-container -mt-6 pb-2">
		<p class="text-sm text-muted">
			This page updates using the GitHub REST API and server-side-rendering to quickly load the
			real-time data &#9889;&#9889;&#9889;
		</p>
	</div>
</div>

<div class="page-container pb-10" in:fade|global={{ duration: 800, delay: 500 }}>
	{#each repos as repo}
		<Project {repo} />
	{/each}
</div>
