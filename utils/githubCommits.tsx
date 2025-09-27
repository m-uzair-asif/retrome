import { format } from "date-fns";

export async function fetchCommitsByDate() {
  const username = "m-uzair-asif";
  const token = process.env.GITHUB_TOKEN;
  const headers = { Authorization: `token ${token}` };

  const since = new Date();
  since.setFullYear(since.getFullYear() - 1); // past 1 year
  const isoSince = since.toISOString();

  const reposRes = await fetch(
    `https://api.github.com/user/repos?per_page=100&visibility=all`,
    { headers }
  );
  const repos = await reposRes.json();
  const commitCount: Record<string, number> = {};

  for (const repo of repos) {
    let page = 1;
    while (true) {
      const res = await fetch(
        `https://api.github.com/repos/${username}/${repo.name}/commits?author=${username}&since=${isoSince}&per_page=100&page=${page}`,
        { headers }
      );
      const commits = await res.json();
      if (!Array.isArray(commits) || commits.length === 0) break;

      for (const c of commits) {
        const date = format(new Date(c.commit.author.date), "yyyy-MM-dd");
        commitCount[date] = (commitCount[date] || 0) + 1;
      }
      page++;
    }
  }

  return Object.entries(commitCount)
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}
