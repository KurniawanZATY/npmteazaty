const core = require('@actions/core');
const github = require('@actions/github');

try {
  // Get the token from the workflow input
  const token = core.getInput('token');

  // Check if the token is provided
  if (!token) {
    throw new Error('Token is required. Please set it as an input in your GitHub Actions workflow.');
  }

  // Create octokit instance
  const octokit = github.getOctokit(token);

  // Your script logic goes here

  console.log('Hello from npmteazaty!');
} catch (error) {
  core.setFailed(error.message);
}
