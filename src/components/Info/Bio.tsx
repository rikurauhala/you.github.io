import { Typography } from '@mui/material';

const Bio = ({ bio }: { bio: string }): JSX.Element => (
  <div className='bio'>
    <Typography variant='subtitle1' component='h2'>
      {bio}
    </Typography>
  </div>
);

export default Bio;
