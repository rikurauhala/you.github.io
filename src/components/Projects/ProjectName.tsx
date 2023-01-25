import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const ProjectName = ({ url, name }: { url: string, name: string }): JSX.Element => (
  <Link href={url} target="_blank">
    <Typography component="h2" gutterBottom variant="h6">
      {name}
    </Typography>
  </Link>
);

export default ProjectName;
