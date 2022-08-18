import { Card, CardContent, Grid, Link, Typography } from '@mui/material';
import { Repository } from '../types/types';
import LanguageBar from './LanguageBar';

const ProjectName = ({ url, name }: { url: string, name: string }): JSX.Element => (
  <Link href={url}>
    <Typography gutterBottom variant='h6' component='h2'>
      {name}
    </Typography>
  </Link>
);

const ProjectYear = ({ year }: { year: string }): JSX.Element => (
  <Typography component='p' style={{color: '#5d7275', marginBottom: '8px'}}>
    {year}
  </Typography>
);

const ProjectDescription = ({ description }: { description: string }): JSX.Element => {
  if (!description) {
    description = '[ No description ]';
  }

  return (
    <Typography variant='body2' component='p' style={{color: '#fff'}}>
      {description}
    </Typography>
  );
};

const ProjectTopics = ({ topics }: { topics: Array<string> }): JSX.Element => {
  if (topics.length === 0) {
    topics.push('no-topics-yet');
  }
  return (
    <Typography variant='body2' component='p' style={{color: '#5e707a'}}>
      {topics
        .filter(topic => topic !== 'portfolio')
        .map(topic =>
          <span key={topic}>#{topic} </span>
        )}
    </Typography>
  );
};

const Project = ({ repository }: { repository: Repository }): JSX.Element => (
  <Grid item xs={12} md={6} style={{display: 'flex'}}>
    <Card style={{backgroundColor: '#051222', width: '100%', border: '#0f3552 1px solid'}}>
      <CardContent>
        <ProjectName url={repository.html_url} name={repository.name} />
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
