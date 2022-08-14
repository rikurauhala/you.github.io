import { useEffect, useState } from 'react';

import { Octokit } from 'octokit';

import { Link, Typography } from '@mui/material';

import { username } from '../config';

import { UserFull } from '../types/types';

import { initialUserFull } from '../utils/initialObjects';

import profilePicture from '../assets/images/riku.jpg';

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

const Name = ({ name }: { name: string }): JSX.Element => {
  if (name === 'initial') {
    return (
      <div>Skeleton here</div>
    );
  }

  return (
    <Typography variant='h4' component='h1'>
      {name}
    </Typography>
  );
};

const Bio = ({ bio }: { bio: string }): JSX.Element => (
  <div className='bio'>
    <Typography variant='subtitle1' component='h2'>
      {bio}
    </Typography>
  </div>
);

const Location = ({ location }: { location: string }): JSX.Element => (
  <div className='details'>
    <img src={locIcon as string} className='icon-info' title='Location' /> {location}
  </div>
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

const Info = (): JSX.Element => {
  const [user, setUser] = useState<UserFull>(initialUserFull);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const octokit = new Octokit();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { data } = await octokit.request(`GET /users/${username}`);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    void fetchUser();
    //setTimeout(fetchUser, 5000);
  }, []);

  return (
    <div className='info'>
      <ProfilePicture />
      <Name name={user.name} />
      <Bio bio={user.bio} />
      <Location location={user.location} />
      <Socials />
    </div>
  );
};

export default Info;
