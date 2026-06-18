<script>
	import Projectshero from '../../lib/components/projectshero.svelte';
	import FeaturedProjectCard from '../../lib/cards/featured-project-card.svelte';
	import Seo from '../../lib/components/seo.svelte';
	import { featuredProjects } from '$lib/data/featuredProjects';
	import { fade } from 'svelte/transition';
</script>

<Seo
	title="Projects | Chase Martin"
	description="Featured work in water data, environmental systems, and applied AI — including Ocotillo, Aqueduct, and Arc Radius."
	keywords="Chase Martin, Projects, Ocotillo, Aqueduct, Arc Radius, Water Data, Open Source, GitHub"
	type="WebPage"
/>

<div in:fade|global={{ duration: 800 }}>
	<Projectshero />

	<div class="page-container space-y-10 py-8">
		<section class="profile-section -mt-4">
			<p class="text-body">
				Selected work across public water data infrastructure, environmental data pipelines, and
				applied AI — from product strategy and pipeline design through frontend and backend
				implementation.
			</p>
		</section>

		<section class="profile-section pb-2">
			<h2 class="profile-section-heading">Featured projects</h2>
			<div class="grid gap-6">
				{#each featuredProjects as project}
					<FeaturedProjectCard {project} />
				{/each}
			</div>
		</section>
	</div>
</div>
