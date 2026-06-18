export const featuredProjects = [
	{
		name: 'Ocotillo',
		url: 'https://github.com/DataIntegrationGroup/OcotilloUI',
		focus: 'New Mexico Bureau of Geology data management platform',
		stack: ['React', 'Refine.dev', 'TypeScript', 'FastAPI']
	},
	{
		name: 'Aqueduct',
		url: 'https://github.com/DataIntegrationGroup/Aqueduct',
		focus: 'New Mexico Bureau of Geology data pipeline for water data integration',
		stack: ['Python', 'Dagster', 'GCP']
	},
	{
		name: 'Arc Radius',
		url: 'https://arcradius.org/',
		homepage: 'https://arcradius.org/',
		focus: 'Berkeley MIDS capstone for legislative AI explanations',
		stack: ['GraphRAG', 'Neo4j', 'LLM evaluation', 'React Native', 'FastAPI', 'AWS']
	}
];

/** Repo slugs to exclude from the GitHub "more repos" list (featured + org repos). */
export const featuredRepoSlugs = ['OcotilloUI', 'Aqueduct', 'arc-radius-api', 'arc-radius-ui'];
