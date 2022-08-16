import { Octokit } from 'octokit';

import { username } from '../config';

import { RepositoryFull } from '../types/types';

const octokit = new Octokit();

const getRepositories = (setState: (arg0: RepositoryFull[]) => void) => {
  const fetchRepositories = async () => {
    try {
      const response = await octokit.request(`GET /users/${username}/repos`);
      setState(response.data as Array<RepositoryFull>);
    } catch (error) {
      console.log(error);
    }
  };
  void fetchRepositories();
};

export default { getRepositories };
