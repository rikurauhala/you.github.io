import { Octokit } from 'octokit';

import { username } from '../config';

import { RepositoryFull, UserFull } from '../types/types';

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

const getUser = (setState: (arg0: UserFull) => void) => {
  const fetchUser = async () => {
    try {
      const response = await octokit.request(`GET /users/${username}`);
      setState(response.data as UserFull);
    } catch (error) {
      console.log(error);
    }
  };
  void fetchUser();
};

export default { getRepositories, getUser };
