import Typography from '@mui/material/Typography';

const ProjectYear = ({ year }: { year: string }): JSX.Element => (
  <Typography component='p' style={{color: '#5d7275', marginBottom: '8px'}}>
    {year}
  </Typography>
);

export default ProjectYear;
