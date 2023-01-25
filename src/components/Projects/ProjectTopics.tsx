import Typography from '@mui/material/Typography';

const ProjectTopics = ({ topics }: { topics: Array<string> }): JSX.Element => {
  if (topics.length === 0) {
    topics.push('no-topics-yet');
  }

  return (
    <Typography component="p" style={{ color: '#5e707a' }} variant="body2">
      {topics
        .filter(topic => topic !== 'portfolio')
        .map(topic =>
          <span key={topic}>#{topic} </span>
        )}
    </Typography>
  );
};

export default ProjectTopics;
