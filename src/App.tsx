import { useEffect, useState } from 'react';

import { Container } from '@mui/material';

import Info from './components/Info';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

import { keyword } from './config';

import { setTitle } from './utils/helper';

import octokitService from './services/octokit';

import { Repository, RepositoryFull } from './types/types';

import './App.css';

const App = (): JSX.Element => {
  const [repositories, setRepositories] = useState<Array<RepositoryFull>>([]);
  const filteredRepositories: Array<Repository> = repositories
    .filter(repository => !repository.fork && repository.topics.includes(keyword))
    .map(repository => ({
      description: repository.description,
      homepage: repository.homepage,
      html_url: repository.html_url,
      id: repository.id,
      languages_url: repository.languages_url,
      name: repository.name,
      pushed_at: new Date(repository.pushed_at),
      topics: repository.topics,
      year: repository.created_at.substring(0,4)
    }))
    .sort((a, b) => b.pushed_at.getTime() - a.pushed_at.getTime());

  const setState = (repositoriesFromAPI: Array<RepositoryFull>) => {
    setRepositories(repositoriesFromAPI);
  };

  useEffect(() => {
    setTitle();
    void octokitService.getRepositories(setState);
  }, []);

  return (
    <Container maxWidth='md'>
      <Info />
      <About />
      <Projects repositories={filteredRepositories} />
      <Footer />
    </Container>
  );
};

export default App;
