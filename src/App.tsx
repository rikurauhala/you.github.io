import { useEffect } from 'react';

import { Container } from '@mui/material';

import Info from './components/Info/Info';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

import { setTitle } from './utils/helper';

import './App.css';

const App = (): JSX.Element => {
  useEffect(() => {
    setTitle();
  }, []);

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
