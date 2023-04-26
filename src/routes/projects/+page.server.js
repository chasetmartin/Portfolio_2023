import { GITHUB_TOKEN } from '$env/static/private'

const EXCLUDED_REPOS = ['virtual_dr', 'developers', 'office_hours_python']

const makeProjectList = async (ghResponse) => {
  if (!ghResponse || !Array.isArray(ghResponse)) return [];
  return ghResponse
    .filter((repo) => !EXCLUDED_REPOS.includes(repo.name)) // Exclude repos in exclusion list
    .map((repo) => {
      return {
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
        topics: repo.topics // Append and merge with any hard-coded data from config
      };
    })
    .sort((a, b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
    });
};

export async function load({ fetch }) {
  const githubApiUrl = `https://api.github.com/users/chasetmartin/repos?per_page=100`;
  const githubRequest = {
    headers: GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {},
  };
  const repos = await fetch(githubApiUrl, githubRequest)
    .then((res) => res.json())
    .then(makeProjectList);
  return { repos };
}
