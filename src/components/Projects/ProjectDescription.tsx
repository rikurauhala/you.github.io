import Typography from '@mui/material/Typography';

const ProjectDescription = ({ description }: { description: string }): JSX.Element => {
  if (!description) {
    description = '[ No description ]';
  }

  return (
    <Typography variant='body2' component='p' style={{ color: '#fff' }}>
      {description}
    </Typography>
  );
};

export default ProjectDescription;
