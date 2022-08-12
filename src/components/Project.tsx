import { Card, CardContent, Grid, Link, Typography } from '@mui/material';
import { Repository } from '../types/types';

const Project = ({ repository }: { repository: Repository }): JSX.Element => (
  <Grid item xs={12} md={6} style={{display: 'flex'}}>
    <Card style={{backgroundColor: '#05121c', width: '100%', border: '#0f3552 1px solid'}}>
      <CardContent className='project'>
        <Link href={repository.html_url}>
          <Typography gutterBottom variant="h6" component="h2">
            {repository.name}
          </Typography>
        </Link>
        <Typography variant="body2" color="textSecondary" component="p" style={{color: '#fff'}}>
          {repository.description}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default Project;
