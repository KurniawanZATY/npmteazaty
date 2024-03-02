const core = require('@actions/core');
const github = require('@actions/github');

try {
  // Get the token from the workflow input
  const token = core.getInput('token');

  // Create octokit instance
  const octokit = github.getOctokit(token);

  // Your script logic goes here

  console.log('Hello from npmteazaty!');
} catch (error) {
  core.setFailed(error.message);
}
