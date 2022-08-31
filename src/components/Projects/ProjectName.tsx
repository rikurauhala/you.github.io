import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const ProjectName = ({ url, name }: { url: string, name: string }): JSX.Element => (
  <Link href={url}>
    <Typography gutterBottom variant='h6' component='h2'>
      {name}
    </Typography>
  </Link>
);

export default ProjectName;
