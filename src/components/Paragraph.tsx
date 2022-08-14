import { Typography } from '@mui/material';

const Paragraph = ({ content }: { content: string }): JSX.Element => (
  <Typography paragraph component='p' variant='body1'>
    {content}
  </Typography>
);

export default Paragraph;
