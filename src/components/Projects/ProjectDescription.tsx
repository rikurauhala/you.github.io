import Typography from '@mui/material/Typography';

const ProjectDescription = ({ description }: { description: string }): JSX.Element => {
  if (!description) {
    description = '[ No description ]';
  }

  return (
    <Typography component="p" style={{ color: '#fff' }} variant="body2">
      {description}
    </Typography>
  );
};

export default ProjectDescription;
