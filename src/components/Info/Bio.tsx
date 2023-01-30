import Typography from '@mui/material/Typography';

const Bio = ({ bio }: { bio: string }): JSX.Element => (
  <Typography color="primary" component="h2" variant="subtitle1">
    {bio}
  </Typography>
);

export default Bio;
