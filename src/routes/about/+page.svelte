<script>
	import Abouthero from '../../lib/components/abouthero.svelte';
	import Seo from '../../lib/components/seo.svelte';
	import { Collapsible } from 'bits-ui';
	import { fade } from 'svelte/transition';
	import AccordionTrigger from '$lib/components/ui/accordion-trigger.svelte';
	import Card from '$lib/components/ui/card.svelte';

	let { data } = $props();
</script>

<Seo
	title="About | Chase Martin"
	description="Learn about my mission, software development experience, technical skills, and education."
	keywords="Chase Martin, About, Software, Mission, Skills, Education"
	type="WebPage"
/>

<div in:fade|global={{ duration: 800 }}>
	<Abouthero {data} />

	<div class="page-container space-y-6 py-6">
		<Collapsible.Root open>
			<AccordionTrigger>Mission</AccordionTrigger>
			<Collapsible.Content
				class="overflow-hidden px-1 pt-4 text-body data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
			>
				{data.about.content}
			</Collapsible.Content>
		</Collapsible.Root>
	</div>

	<div class="page-container pb-10" in:fade|global={{ duration: 800, delay: 1000 }}>
		<div class="grid gap-6 lg:grid-cols-2">
			<Collapsible.Root open>
				<AccordionTrigger>Skills</AccordionTrigger>
				<Collapsible.Content
					class="space-y-4 overflow-hidden pt-4 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
				>
					{#each Object.keys(data.skills) as category}
						<Card class="h-auto">
							<header
								class="border-b border-border-subtle bg-surface-gradient px-4 py-3 text-base font-semibold tracking-tight"
							>
								{category}
							</header>
							<ul class="columns-1 gap-4 px-4 py-4 sm:columns-2">
								{#each data.skills[category] as skill}
									<li class="mb-2 flex items-center gap-2 break-inside-avoid">
										<span class="size-2 shrink-0 rounded-full bg-primary"></span>
										<span>{skill.skill}</span>
										{#if skill.logo}
											<img src={skill.logo} alt="" class="h-4 w-4" />
										{/if}
									</li>
								{/each}
							</ul>
						</Card>
					{/each}
				</Collapsible.Content>
			</Collapsible.Root>

			<Collapsible.Root open>
				<AccordionTrigger>Experience</AccordionTrigger>
				<Collapsible.Content
					class="space-y-4 overflow-hidden pt-4 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
				>
					{#each data.experience as exp}
						<Card class="h-auto">
							<header class="border-b border-border-subtle bg-surface-gradient px-4 py-3">
								<p class="font-semibold tracking-tight">{exp.position} | {exp.company}</p>
								<p class="text-sm text-muted">
									{exp.location} {exp.date_range}
								</p>
							</header>
							<div class="space-y-2 px-4 py-4 text-body">
								{#if exp.skills !== ''}
									<p class="text-sm font-medium">Programming skills: {exp.skills}</p>
								{/if}
								{#if exp.description !== ''}
									<p>{exp.description}</p>
								{/if}
							</div>
							{#if exp.position2}
								<footer class="border-t border-border-subtle bg-surface-gradient px-4 py-3 text-sm">
									{exp.position2} | {exp.company2}
									<br />
									{exp.location2} {exp.date_range2}
								</footer>
							{/if}
						</Card>
					{/each}
				</Collapsible.Content>
			</Collapsible.Root>
		</div>
	</div>
</div>
