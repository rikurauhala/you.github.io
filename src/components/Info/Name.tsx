import Typography from '@mui/material/Typography';

import { username } from '../../config';

const Name = ({ name }: { name: string }): JSX.Element => (
  <Typography component="h1" variant="h4">
    {name ? name : username}
  </Typography>
);

export default Name;
