import { Grid } from '@mui/material';
import Project from './Project'; 
import { Repository } from '../types/types';

const Projects = ({ repositories }: { repositories: Array<Repository> }): JSX.Element => {
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
          {repositories.map(repository =>
            <Project
              key={repository.id}
              repository={repository}
            />
          )}
        </Grid>
      </div>
    </>
  );
};

export default Projects;
