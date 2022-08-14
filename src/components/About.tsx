import { Link, Typography } from '@mui/material';

import Subtitle from './Subtitle';
import Paragraph from './Paragraph';

const About = () => {
  const subtitle = 'About';
  const paragraph1 = 'Hello there! My name is Riku. Welcome to my professional home page.';
  const paragraph3 = 'To contact me, send me an email. You can find the address on my GitHub page.';

  return (
    <>
      <Subtitle subtitle={subtitle} />
      <Paragraph content={paragraph1} />
      <Typography paragraph component='p' variant='body1'>
        I am a computer science student at the <Link href='https://www.helsinki.fi/'>
        University of Helsinki</Link>. This summer I'm working as a trainee at&nbsp;
        <Link href='https://www.if-insurance.com/about-if'>If Insurance</Link>.
        I'm also learning modern full stack development with the course&nbsp;
        <Link href='https://fullstackopen.com/en/'>Full stack open</Link>!
      </Typography>
      <Paragraph content={paragraph3} />
    </>
  );
};

export default About;
