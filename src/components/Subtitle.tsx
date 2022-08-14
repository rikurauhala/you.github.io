import { Typography } from '@mui/material';

const Subtitle = ({ subtitle }: { subtitle: string }): JSX.Element => (
  <Typography gutterBottom component='h1' variant='h5'>
    {subtitle}
  </Typography>
);

export default Subtitle;
