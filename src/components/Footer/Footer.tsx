import { ReactElement } from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

import { name, url, username } from '../../config';

import './Footer.css';

export interface FooterButtonProps {
  icon: ReactElement
  text: string
  url: string
}

const FooterButton = ({ icon, text, url }: FooterButtonProps) => (
  <Grid item md={3} textAlign="center" xs={6}>
    <Button
      href={url}
      size="small"
      startIcon={icon}
      target="_blank"
    >
      {text}
    </Button>
  </Grid>
);

const Footer = () => {
  let address = url;
  if (!url) address = `${username}.github.io`;
  const source = `https://github.com/${username}/${username}.github.io`;

  return (
    <Container sx={{ margin: '20px 0px' }} >
      <Grid
        alignItems="center"
        container
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="center"
        spacing={{ xs: 1, sm: 0.5, md: 0 }}
      >
        <FooterButton
          icon={<HomeIcon />}
          text={address}
          url=""
        />
        <FooterButton
          icon={<PersonIcon />}
          text={name}
          url=""
        />
        <FooterButton
          icon={<CalendarMonthIcon />}
          text="2022-2023"
          url=""
        />
        <FooterButton
          icon={<GitHubIcon />}
          text="Source code"
          url={source}
        />
      </Grid>
    </Container>
  );
};

export default Footer;
