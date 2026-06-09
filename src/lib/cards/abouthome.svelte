<script>
	import Card from '$lib/components/ui/card.svelte';
	import CardHeader from '$lib/components/ui/card-header.svelte';
	import CardBody from '$lib/components/ui/card-body.svelte';
	import CardFooter from '$lib/components/ui/card-footer.svelte';
	import Button from '$lib/components/ui/button.svelte';
</script>

<Card>
	<CardHeader>
		<Button href="/about">About</Button>
	</CardHeader>
	<CardBody>Learn more about me! &#128218; &#128269; &#127891;</CardBody>
	<CardFooter>
		<Button
			variant="secondary"
			href="https://www.linkedin.com/in/chase-martin-dev/"
			target="_blank"
			rel="noreferrer"
		>
			LinkedIn
		</Button>
	</CardFooter>
</Card>
