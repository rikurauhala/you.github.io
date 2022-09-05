import Typography from '@mui/material/Typography';

import { username } from '../../config';

const Name = ({ name }: { name: string }): JSX.Element => (
  <Typography variant='h4' component='h1'>
    {name ? name : username}
  </Typography>
);

export default Name;
