import { Card, CardContent, Grid, Link, Typography } from '@mui/material';
import { Repository } from '../types/types';
import LanguageBar from './LanguageBar';

const Project = ({ repository }: { repository: Repository }): JSX.Element => (
  <Grid item xs={12} md={6} style={{display: 'flex'}}>
    <Card style={{backgroundColor: '#05121c', width: '100%', border: '#0f3552 1px solid'}}>
      <CardContent>
        <Link href={repository.html_url}>
          <Typography gutterBottom variant='h6' component='h2'>
            {repository.name}
          </Typography>
        </Link>
        <Typography component='p' style={{color: '#5d7275', marginBottom: '8px'}}>
          {repository.year}
        </Typography>
        <Typography variant='body2' component='p' style={{color: '#fff'}}>
          {repository.description}
        </Typography>
      <LanguageBar languagesUrl={repository.languages_url} />
      </CardContent>
      <CardContent>
        <Typography variant='body2' component='p' style={{color: '#465557'}}>
          {repository.topics
            .filter(topic => topic !== 'portfolio')
            .map(topic => 
              <span key={topic}>#{topic}&nbsp;</span>
            )}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default Project;
