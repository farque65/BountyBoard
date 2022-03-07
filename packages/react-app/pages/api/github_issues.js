const { Octokit } = require("@octokit/rest");

export default async (req, res) => {
  const octokit = new Octokit({
    auth: process.env.NEXT_GITHUB_TOKEN,
  });

  const apiURLBeginning = "https://api.github.com/repos/";

  const repoURLBeginning = "https://github.com/";

  const projectIssueUrls = [
    "https://api.github.com/repos/moonshotcollective/tip.party/issues",
    "https://api.github.com/repos/moonshotcollective/publicgoods.party/issues",
    "https://api.github.com/repos/moonshotcollective/pay.party/issues",
    "https://api.github.com/repos/moonshotcollective/fund.party/issues",
    "https://api.github.com/repos/moonshotcollective/tokenstream.party/issues",
    "https://api.github.com/repos/moonshotcollective/recruiter.party/issues",
  ];

  const validLabels = ["good first issue"];

  let temp = [];
  const result = [];

  for (const url of projectIssueUrls) {
    temp = await octokit.request(url);
    const tempFiltered = temp.data
      .filter(i => {
        if (i.labels !== []) {
          const num = i.labels.filter(i => validLabels.includes(i.name.toLowerCase()));
          return num.length > 0;
        }
      })
      .map(i => {
        const repository_url_arr = i.repository_url.split("/");
        const url_arr = i.url.split("/");
        return {
          url: `${repoURLBeginning}${url_arr.slice(-4).join("/")}`,
          repository_url: i.repository_url,
          title: i.title,
          created_at: i.created_at,
          updated_at: i.updated_at,
          project_name: repository_url_arr[repository_url_arr.length - 1],
          project_url: `${repoURLBeginning}${url_arr.slice(-4, repository_url_arr.length).join("/")}`,
          body: i.body,
        };
      });
    result.push(tempFiltered);
  }

  return res.status(200).json({ issues: result.flat() });
};
