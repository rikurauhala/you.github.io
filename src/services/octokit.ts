import { Octokit } from 'octokit';

import { username } from '../config';

import { RepositoryFull, UserFull } from '../types/types';

const octokit = new Octokit();

const getLanguages = (languagesUrl: string, setState: (arg0: string[]) => void) => {
  const fetchLanguages = async () => {
    try {
      const octokit = new Octokit();
      const response = await octokit.request(`GET ${languagesUrl}`);
      setState(response.data as Array<string>);
    } catch (error) {
      console.log(error);
    }
  };

  void fetchLanguages();
};

const getRepositories = (setState: (arg0: RepositoryFull[]) => void) => {
  const repositories = localStorage.getItem('repositories');
  if (repositories) {
    setState(JSON.parse(repositories) as RepositoryFull[]);
    return;
  }

  const fetchRepositories = async () => {
    try {
      const response = await octokit.request(`GET /users/${username}/repos`);
      setState(response.data as Array<RepositoryFull>);
      localStorage.setItem('repositories', JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  void fetchRepositories();
};

const getUser = (setState: (arg0: UserFull) => void) => {
  const gitHubUser = localStorage.getItem('gitHubUser');
  if (gitHubUser) {
    setState(JSON.parse(gitHubUser) as UserFull);
    return;
  }

  const fetchUser = async () => {
    try {
      const response = await octokit.request(`GET /users/${username}`);
      setState(response.data as UserFull);
      localStorage.setItem('gitHubUser', JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  void fetchUser();
};

export default { getLanguages, getRepositories, getUser };
