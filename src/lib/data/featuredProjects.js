export const featuredProjects = [
	{
		name: 'Ocotillo',
		url: 'https://github.com/DataIntegrationGroup/OcotilloUI',
		organization: 'New Mexico Bureau of Geology · Data Integration Group',
		role: 'Technical Product Manager & Engineer',
		summary: 'Data management platform for public water and environmental data',
		description:
			'Internal data platform supporting the New Mexico Water Data Initiative — helping staff ingest, manage, search, and publish water-related datasets through a modern admin UI backed by a FastAPI service layer.',
		highlights: [
			'Refine.dev admin interface for dataset and metadata management',
			'TypeScript/React frontend with role-based workflows',
			'FastAPI backend integrating with PostgreSQL/PostGIS data stores'
		],
		stack: ['React', 'Refine.dev', 'TypeScript', 'FastAPI', 'PostgreSQL', 'PostGIS'],
		links: [
			{ label: 'UI repo', href: 'https://github.com/DataIntegrationGroup/OcotilloUI', external: true },
			{ label: 'API repo', href: 'https://github.com/DataIntegrationGroup/OcotilloAPI', external: true }
		]
	},
	{
		name: 'Aqueduct',
		url: 'https://github.com/DataIntegrationGroup/Aqueduct',
		organization: 'New Mexico Bureau of Geology · Data Integration Group',
		role: 'Technical Product Manager & Engineer',
		summary: 'Orchestrated pipeline for water data integration',
		description:
			'Dagster-based data pipeline that ingests, transforms, and loads water monitoring data from disparate sources into a unified schema — making environmental datasets more interoperable and ready for downstream tools like Ocotillo.',
		highlights: [
			'Python ETL assets with Dagster orchestration and observability',
			'GCP-based deployment for scheduled and event-driven ingestion',
			'Designed for reproducibility, testing, and long-running public data workflows'
		],
		stack: ['Python', 'Dagster', 'GCP', 'PostgreSQL', 'PostGIS'],
		links: [
			{ label: 'GitHub', href: 'https://github.com/DataIntegrationGroup/Aqueduct', external: true }
		]
	},
	{
		name: 'Arc Radius',
		url: 'https://arcradius.org/',
		homepage: 'https://arcradius.org/',
		organization: 'UC Berkeley MIDS · Capstone',
		role: 'Applied ML & Full-Stack Engineer',
		summary: 'GraphRAG platform for legislative AI explanations',
		description:
			'Capstone project building a grounded retrieval system that pairs knowledge graphs, machine learning, and LLMs to help people understand, compare, and evaluate complex legislative information — with explicit evaluation workflows for trust and quality.',
		highlights: [
			'Neo4j knowledge graph with GraphRAG retrieval pipelines',
			'LLM evaluation framework for measuring explanation quality',
			'React Native client and FastAPI backend deployed on AWS'
		],
		stack: ['GraphRAG', 'Neo4j', 'LLM evaluation', 'React Native', 'FastAPI', 'AWS'],
		links: [
			{ label: 'Website', href: 'https://arcradius.org/', external: true }
		]
	}
];

/** Repo slugs to exclude from the GitHub "more repos" list (featured + org repos). */
export const featuredRepoSlugs = ['OcotilloUI', 'Aqueduct', 'arc-radius-api', 'arc-radius-ui'];
