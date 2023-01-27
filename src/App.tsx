import { CssBaseline, ThemeProvider } from '@mui/material';

import Container from '@mui/material/Container';

import Info from './components/Info';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

import { theme } from './themes';

import Meta from './meta';

import './App.css';

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Meta />
    <Container maxWidth="lg">
      <Info />
      <About />
      <Projects />
      <Footer />
    </Container>
  </ThemeProvider>
);

export default App;
