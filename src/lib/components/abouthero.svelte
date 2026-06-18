<script>
	let { data } = $props();
</script>

<div class="hero-section [background-image:var(--background-hero2)]">
	<div class="page-container home-hero-content relative z-10 flex h-full flex-col justify-center">
		<h1 class="hero-title">{data.about.title}</h1>
		<h2 class="hero-subtitle home-hero-tagline">
			<span class="home-hero-tagline__identity">{data.about.tagline.identity}</span>
			<span class="home-hero-tagline__topics">{data.about.tagline.topics}</span>
		</h2>
	</div>
</div>
