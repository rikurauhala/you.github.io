/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useEffect, useState } from 'react';

import { Container } from '@mui/material';

import { Octokit } from 'octokit';

import Info from './components/Info';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

import { Repository, RepositoryFull } from './types/types';

import './App.css';

const App = (): JSX.Element => {
  const [repositories, setRepositories] = useState<Array<RepositoryFull>>([]);
  const filteredRepositories: Array<Repository> = repositories
    .filter(repository => !repository.fork && repository.topics.includes('portfolio'))
    .map(repository => ({
      created_at: repository.created_at,
      description: repository.description,
      homepage: repository.homepage,
      html_url: repository.html_url,
      id: repository.id,
      name: repository.name,
      topics: repository.topics,
    }));

  const octokit = new Octokit();
  const username = 'rikurauhala';

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const { data } = await octokit.request(`GET /users/${username}/repos`);
        setRepositories(data);
      } catch (error) {
        console.log(error);
      }
    };
    void fetchRepositories();
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
