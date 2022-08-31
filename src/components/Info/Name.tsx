import Typography from '@mui/material/Typography';

const Name = ({ name }: { name: string }): JSX.Element => (
  <Typography variant='h4' component='h1'>
    {name}
  </Typography>
);

export default Name;
