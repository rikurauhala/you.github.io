import { Grid } from '@mui/material';

import { Repository } from '../../types/types';

import Project from './Project';

const ProjectGrid = ({ repositories }: { repositories: Array<Repository> }): JSX.Element => (
  <Grid container spacing={2}>
    {repositories.map(repository =>
      <Project
        key={repository.id}
        repository={repository}
      />
    )}
  </Grid>
);

export default ProjectGrid;
