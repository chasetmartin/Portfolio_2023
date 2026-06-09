<script>
	import Card from '$lib/components/ui/card.svelte';
	import CardHeader from '$lib/components/ui/card-header.svelte';
	import CardBody from '$lib/components/ui/card-body.svelte';
	import CardFooter from '$lib/components/ui/card-footer.svelte';
	import Button from '$lib/components/ui/button.svelte';
</script>

<Card>
	<CardHeader>
		<Button href="/projects">Projects</Button>
	</CardHeader>
	<CardBody>
		Check out my projects page &#128070; or head on over to my GitHub &#128071;
	</CardBody>
	<CardFooter>
		<Button variant="secondary" href="https://github.com/chasetmartin" target="_blank" rel="noreferrer">
			GitHub
		</Button>
	</CardFooter>
</Card>
