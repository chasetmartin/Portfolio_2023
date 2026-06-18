<script>
	import Abouthero from '../../lib/components/abouthero.svelte';
	import Seo from '../../lib/components/seo.svelte';
	import ProfileLinks from '$lib/components/profile-links.svelte';
	import TagList from '$lib/components/tag-list.svelte';
	import ExperienceCard from '$lib/cards/experience-card.svelte';
	import Card from '$lib/components/ui/card.svelte';
	import { Collapsible } from 'bits-ui';
	import AccordionTrigger from '$lib/components/ui/accordion-trigger.svelte';
	import { fade } from 'svelte/transition';

	let { data } = $props();
</script>

<Seo
	title="About | Chase Martin"
	description="Software engineering and data science at the intersection of water data, applied AI, and public-interest systems. UC Berkeley MIDS."
	keywords="Chase Martin, About, Water Data, MIDS, NMWDI, Software Engineering, Data Science, Public-Interest Technology"
	type="WebPage"
/>

<div in:fade|global={{ duration: 800 }}>
	<Abouthero {data} />

	<div class="page-container space-y-10 py-8">
		<section class="profile-section -mt-4">
			<ProfileLinks links={data.about.links} />
		</section>

		<section class="profile-section">
			<h2 class="profile-section-heading">Current role</h2>
			<ExperienceCard entry={data.currentRole} />
		</section>

		<section class="profile-section">
			<h2 class="profile-section-heading">Education</h2>
			<Card class="h-auto">
				<header class="border-b border-border-subtle bg-surface-gradient px-4 py-3">
					<p class="font-semibold tracking-tight">{data.education.degree}</p>
					<p class="text-sm text-muted">
						{data.education.institution} · {data.education.graduation}
					</p>
				</header>
				<div class="space-y-3 px-4 py-4 text-body">
					<p>{data.education.focus}</p>
					<p>
						Capstone:
						<a
							href={data.education.capstone.url}
							class="text-primary no-underline hover:text-primary-hover hover:underline"
							target="_blank"
							rel="noreferrer"
						>
							{data.education.capstone.name}
						</a>
						— {data.education.capstone.description}
					</p>
				</div>
			</Card>
		</section>

		<section class="profile-section">
			<div class="grid gap-8 lg:grid-cols-2 lg:items-start">
				<div class="space-y-3">
					<h2 class="profile-section-heading">About</h2>
					<div class="space-y-4 text-body">
						{#each data.about.bio as paragraph}
							<p>{paragraph}</p>
						{/each}
					</div>
				</div>

				<div class="space-y-3">
					<h2 class="profile-section-heading">Technical focus</h2>
					<div class="space-y-5">
						{#each Object.keys(data.technicalFocus) as category}
							<div>
								<h3 class="mb-2 text-base font-medium">{category}</h3>
								<TagList tags={data.technicalFocus[category]} />
							</div>
						{/each}
					</div>
				</div>
			</div>
		</section>

		<section class="profile-section">
			<h2 class="profile-section-heading">Previous Experience</h2>
			<div class="space-y-4">
				{#each data.experience as entry}
					<ExperienceCard {entry} />
				{/each}
			</div>
		</section>

		<section class="profile-section">
			<h2 class="profile-section-heading">Current interests</h2>
			<TagList tags={data.interests} />
		</section>

		<section class="profile-section pb-2">
			<Collapsible.Root>
				<AccordionTrigger>{data.earlierBackground.title}</AccordionTrigger>
				<Collapsible.Content
					class="overflow-hidden px-1 pt-4 text-body data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
				>
					<p>{data.earlierBackground.summary}</p>
				</Collapsible.Content>
			</Collapsible.Root>
		</section>
	</div>
</div>
