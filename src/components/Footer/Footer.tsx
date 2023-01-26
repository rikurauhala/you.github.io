import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonIcon from '@mui/icons-material/Person';

import { name, username } from '../../config';

import FooterButton from './FooterButton';

const Footer = () => (
  <Container disableGutters sx={{ margin: '20px 0px' }} >
    <Grid
      container
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent="space-between"
      spacing={{ xs: 1, md: 2 }}
    >
      <FooterButton
        icon={<PersonIcon />}
        text={name}
        url={`https://github.com/${username}`}
      />
      <FooterButton
        icon={<CalendarMonthIcon />}
        text="2022-2023"
        url=""
      />
      <FooterButton
        icon={<GitHubIcon />}
        text="Source code"
        url={`https://github.com/${username}/${username}.github.io`}
      />
    </Grid>
  </Container>
);

export default Footer;
