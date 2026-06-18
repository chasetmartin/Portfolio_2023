import { GITHUB_TOKEN } from '$env/static/private';
import { featuredProjects, featuredRepoSlugs } from '$lib/data/featuredProjects';

const EXCLUDED_REPOS = ['virtual_dr', 'developers', 'office_hours_python', 'Portfolio'];

const makeProjectList = (ghResponse) => {
	if (!ghResponse || !Array.isArray(ghResponse)) return [];

	return ghResponse
		.filter(
			(repo) =>
				!EXCLUDED_REPOS.includes(repo.name) && !featuredRepoSlugs.includes(repo.name)
		)
		.map((repo) => ({
			id: repo.id,
			name: repo.name,
			user: repo.owner.login,
			url: repo.html_url,
			description: repo.description,
			isFork: repo.fork,
			createdAt: repo.created_at,
			updatedAt: repo.pushed_at,
			homepage: repo.homepage,
			language: repo.language,
			license: repo.license?.name,
			size: repo.size,
			stars: repo.stargazers_count,
			forks: repo.forks_count,
			issues: repo.open_issues_count,
			topics: repo.topics ?? []
		}))
		.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
};

export async function load({ fetch }) {
	const githubApiUrl = 'https://api.github.com/users/chasetmartin/repos?per_page=100';
	const githubRequest = {
		headers: GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {}
	};

	let repos = [];

	try {
		const response = await fetch(githubApiUrl, githubRequest);
		if (response.ok) {
			const ghResponse = await response.json();
			repos = makeProjectList(ghResponse);
		}
	} catch {
		repos = [];
	}

	return {
		featured: featuredProjects,
		repos
	};
}
