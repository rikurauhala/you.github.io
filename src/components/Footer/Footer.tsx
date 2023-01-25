import { ReactElement } from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonIcon from '@mui/icons-material/Person';

import { name, username } from '../../config';

export interface FooterButtonProps {
  icon: ReactElement
  text: string
  url: string
}

const FooterButton = ({ icon, text, url }: FooterButtonProps) => (
  <Grid item md={4} textAlign="center" xs={12}>
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
  const source = `https://github.com/${username}/${username}.github.io`;

  return (
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
