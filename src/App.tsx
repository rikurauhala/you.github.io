import { Helmet } from 'react-helmet';

import { CssBaseline, ThemeProvider } from '@mui/material';

import Container from '@mui/material/Container';

import Info from './components/Info';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

import { name } from './config';

import { theme } from './themes';

import './App.css';

const App = (): JSX.Element => {
  const first = name[0].toString().toLowerCase();
  const letter = /[a-z]/.test(first) ? first : '-';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Helmet>
        <title>{name}</title>
        <meta content={`Personal home page of ${name}`} name="description" />
        <link href={`favicon/${letter}.ico`} rel="icon" />
      </Helmet>
      <Container maxWidth="lg">
        <Info />
        <About />
        <Projects />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
