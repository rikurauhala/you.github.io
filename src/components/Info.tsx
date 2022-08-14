import { Link, Typography } from '@mui/material';

import profilePicture from '../assets/images/riku.jpg';

import ageIcon from '../assets/icons/details/age.svg';
import sexIcon from '../assets/icons/details/sex.svg';
import locIcon from '../assets/icons/details/loc.svg';

import ghIcon from '../assets/icons/social/gh.svg';
import liIcon from '../assets/icons/social/li.svg';

import './Info.css';

const ProfilePicture = (): JSX.Element => (
  <img
    alt='Profile picture'
    className='picture'
    src={profilePicture as string}
    title='This is me!'
  />
);

const Name = (): JSX.Element => (
  <Typography variant='h4' component='h1'>
    Riku Rauhala
  </Typography>
);

const Title = (): JSX.Element => (
  <p className='title'>
    <Typography variant='subtitle1' component='h2'>
      Computer science student at&nbsp;
      <Link href='https://www.helsinki.fi/' target='_blank'>
        University of Helsinki
      </Link>
    </Typography>
  </p>
);

const Details = (): JSX.Element => (
  <p className='details'>
    <img src={ageIcon as string} className='icon-info' title='Age' /> 26 |&nbsp;
    <img src={sexIcon as string} className='icon-info' title='Sex' /> M |&nbsp;
    <img src={locIcon as string} className='icon-info' title='Location' /> Finland
  </p>
);

const Socials = (): JSX.Element => (
  <>
    <Social 
      url='https://github.com/rikurauhala'
      icon={ghIcon as string}
      title='See my code on GitHub'
    />
    <Social
      url='https://www.linkedin.com/in/rikurauhala/'
      icon={liIcon as string}
      title='Connect with me on LinkedIn'
    />
  </>
);

const Social = ({ url, icon, title }: { url: string, icon: string, title: string }): JSX.Element => (
  <Link href={url} className='link-social' target='_blank'>
    <img
      className='icon-social'
      src={icon}
      title={title}
    />
  </Link>
);

const Info = (): JSX.Element => (
  <div className='info'>
    <ProfilePicture />
    <Name />
    <Title />
    <Details />
    <Socials />
  </div>
);

export default Info;
