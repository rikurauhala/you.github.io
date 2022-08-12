import { Grid } from '@mui/material';

import './Projects.css';

const Item = () => (
  <Grid item xs={12} md={6}>
    <div className='test'>Hello there!</div>
  </Grid>
);

const Projects = ({repositories}): JSX.Element => {
  return (
    <>
      <h2>Projects</h2>
      <p>
        Here is a selection of projects I have worked on.
        Click the name of the project to view the source code and documentation on GitHub.
        <br/><br/>
        More projects will be added when they are ready to be published.
      </p>
      <div>
        <Grid container spacing={2}>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        </Grid>
      </div>
    </>
  );
};

export default Projects;
