import { Helmet } from 'react-helmet';

import { Container } from '@mui/material';

import Info from './components/Info';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

import { name } from './config';

import './App.css';

const App = (): JSX.Element => {
  const letter = name[0].toString().toLowerCase();
  const favicon = /[a-z]/.test(letter) ? letter : '-';

  return (
    <>
      <Helmet>
        <title>{name}</title>
        <meta name="description" content={`Personal home page of ${name}`} />
        <link rel="icon" href={`favicon/${favicon}.ico`} />
      </Helmet>
      <Container maxWidth='lg'>
        <Info />
        <About />
        <Projects />
        <Footer />
      </Container>
    </>
  );
};

export default App;
