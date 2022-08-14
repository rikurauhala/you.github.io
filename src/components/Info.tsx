import { useEffect, useState } from 'react';

import { Octokit } from 'octokit';

import { Chip, Typography } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';

import { username } from '../config';

import { UserFull } from '../types/types';

import { initialUserFull } from '../utils/initialObjects';

import './Info.css';

const ProfilePicture = ({ url }: { url: string }): JSX.Element => (
  <img
    alt='Profile picture'
    className='picture'
    src={url}
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
  <div className='location'>
    <Chip color='primary' icon={<PlaceIcon fontSize='small'/>} label={location} />
  </div>
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
      <ProfilePicture url={user.avatar_url} />
      <Name name={user.name} />
      <Bio bio={user.bio} />
      <Location location={user.location} />
    </div>
  );
};

export default Info;
