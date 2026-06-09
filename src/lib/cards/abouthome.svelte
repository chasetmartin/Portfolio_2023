<script>
	import Card from '$lib/components/ui/card.svelte';
	import CardHeader from '$lib/components/ui/card-header.svelte';
	import CardBody from '$lib/components/ui/card-body.svelte';
	import CardFooter from '$lib/components/ui/card-footer.svelte';
	import Button from '$lib/components/ui/button.svelte';
</script>

<Card>
	<CardHeader title="About" href="/about" />
	<CardBody>Learn more about me! &#128218; &#128269; &#127891;</CardBody>
	<CardFooter>
		<Button
			variant="link"
			href="https://www.linkedin.com/in/chase-martin-dev/"
			target="_blank"
			rel="noreferrer"
		>
			LinkedIn
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="0.875em"
				height="0.875em"
				viewBox="0 0 24 24"
				aria-hidden="true"
				class="opacity-60 transition-opacity group-hover:opacity-100"
			>
				<path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M7 17L17 7M17 7H9M17 7v8"
				/>
			</svg>
		</Button>
	</CardFooter>
</Card>
