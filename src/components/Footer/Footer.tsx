import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';

import { name, username, version } from '../../config';

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
        icon={<GitHubIcon />}
        text="Source code"
        url={`https://github.com/rikurauhala/you.github.io`} // Please do not modify
      />
      <FooterButton
        icon={<InfoIcon />}
        text={`Version ${version}`}
        url=""
      />
    </Grid>
  </Container>
);

export default Footer;
