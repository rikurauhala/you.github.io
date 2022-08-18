import { Typography } from '@mui/material';

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

export default ProjectTopics;
