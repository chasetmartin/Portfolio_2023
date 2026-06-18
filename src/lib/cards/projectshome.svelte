<script>
	import Card from '$lib/components/ui/card.svelte';
	import CardHeader from '$lib/components/ui/card-header.svelte';
	import CardBody from '$lib/components/ui/card-body.svelte';
	import CardFooter from '$lib/components/ui/card-footer.svelte';
	import ProfileLinks from '$lib/components/profile-links.svelte';
	import { about } from '$lib/data/about';
</script>

<Card class="group">
	<a
		href="/projects"
		class="block flex-1 cursor-pointer no-underline! focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
	>
		<CardHeader title="Projects" />
		<CardBody>
			Featured work including Ocotillo, Aqueduct, and Arc Radius — water data platforms and applied
			AI systems.
		</CardBody>
	</a>
	<CardFooter>
		<ProfileLinks links={about.links.filter((link) => link.label === 'GitHub')} />
	</CardFooter>
</Card>
