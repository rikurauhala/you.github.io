import { Helmet } from 'react-helmet';

import { Container } from '@mui/material';

import Info from './components/Info';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

import { name } from './config';

import './App.css';

const App = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>{name}</title>
        <meta name="description" content={`Personal home page of ${name}`} />
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
