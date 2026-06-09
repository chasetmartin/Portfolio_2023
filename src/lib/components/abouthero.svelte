<script>
	let { data } = $props();
</script>

<div class="hero-section [background-image:var(--background-hero2)]">
	<div class="page-container relative z-10 flex h-full flex-col justify-center">
		<h1 class="hero-title">{data.about.title}</h1>
		<h2 class="hero-subtitle">{data.about.subtitle}</h2>
	</div>
</div>
