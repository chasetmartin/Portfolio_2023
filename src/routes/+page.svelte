<script>
	import Homehero from '../lib/components/homehero.svelte';
	import Projectshome from '../lib/cards/projectshome.svelte';
	import Abouthome from '../lib/cards/abouthome.svelte';
	import Homefooter from '../lib/components/homefooter.svelte';
	import Seo from '$lib/components/seo.svelte';
	import { slide } from 'svelte/transition';
</script>

<Seo
	title="Chase Martin"
	description="I'm a Portland, Oregon based software engineer focused on creative data-driven storytelling, and innovative solutions to current environmental challenges"
	keywords="Chase Martin, Software Devlopment, Data Engineer, Data-driven Storytelling, Open Source"
	type="WebSite"
	canonical="https://chasethomasmartin.com"
/>

<div in:slide|global={{ duration: 1500 }}>
	<Homehero />
	<div class="page-container mt-4">
		<div class="grid gap-6 md:grid-cols-2">
			<Projectshome />
			<Abouthome />
		</div>
	</div>
	<Homefooter />
</div>
