import Typography from '@mui/material/Typography';

const Bio = ({ bio }: { bio: string }): JSX.Element => (
  <div className="bio">
    <Typography component="h2" variant="subtitle1">
      {bio}
    </Typography>
  </div>
);

export default Bio;
