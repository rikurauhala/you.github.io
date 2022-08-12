/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useEffect, useState } from 'react';

import { Container } from '@mui/material';

import { Octokit } from 'octokit';

import Info from './components/Info';
import About from './components/About';
//import ProjectsMUI from './components/ProjectsMUI';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './App.css';

const App = (): JSX.Element => {
  const [repositories, setRepositories] = useState<Array<unknown>>([]);

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

  console.log(repositories);
  return (
    <Container maxWidth='md'>
      <Info />
      <About />
      <Projects />
      <Footer />
    </Container>
  );
};

export default App;
