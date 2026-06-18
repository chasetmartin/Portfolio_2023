<script>
	import Card from '$lib/components/ui/card.svelte';
	import CardHeader from '$lib/components/ui/card-header.svelte';
	import CardBody from '$lib/components/ui/card-body.svelte';
	import CardFooter from '$lib/components/ui/card-footer.svelte';
	import ProfileLinks from '$lib/components/profile-links.svelte';
	import { about } from '$lib/data/about';
</script>

<Card class="group interactive-home-card">
	<a
		href="/about"
		class="block flex-1 no-underline! focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
	>
		<CardHeader title="About" />
		<CardBody>
			Background, experience, and technical focus.
		</CardBody>
	</a>
	<CardFooter>
		<ProfileLinks links={about.links.filter((link) => link.label === 'LinkedIn')} />
	</CardFooter>
</Card>
