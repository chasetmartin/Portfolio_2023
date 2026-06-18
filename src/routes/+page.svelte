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
	description="Software engineering and data science at the intersection of water data, applied AI, and public-interest systems. UC Berkeley MIDS."
	keywords="Chase Martin, Software Engineering, Data Science, Water Data, Applied AI, Public-Interest Systems, MIDS"
	type="WebSite"
	canonical="https://chasethomasmartin.com"
/>

<div in:slide|global={{ duration: 1500 }}>
	<Homehero />
	<div class="page-container mt-4">
		<div class="grid gap-6 md:grid-cols-2">
			<Abouthome />
			<Projectshome />
		</div>
	</div>
	<Homefooter />
</div>
