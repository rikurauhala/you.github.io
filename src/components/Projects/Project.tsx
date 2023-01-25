import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

import { Repository } from '../../types/types';

import LanguageBar from './LanguageBar';

import ProjectName from './ProjectName';
import ProjectYear from './ProjectYear';
import ProjectDescription from './ProjectDescription';
import ProjectTopics from './ProjectTopics';

const Project = ({ repository }: { repository: Repository }): JSX.Element => (
  <Grid item lg={4} md={6} style={{ display: 'flex' }} xs={12}>
    <Card style={{ backgroundColor: '#051222', width: '100%', border: '#0f3552 1px solid' }}>
      <CardContent>
        <ProjectName name={repository.name} url={repository.html_url} />
        <ProjectYear year={repository.year} />
        <ProjectDescription description={repository.description} />
        <LanguageBar languagesUrl={repository.languages_url} />
      </CardContent>
      <CardContent>
        <ProjectTopics topics={repository.topics} />
      </CardContent>
    </Card>
  </Grid>
);

export default Project;
