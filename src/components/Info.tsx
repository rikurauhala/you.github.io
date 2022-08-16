import { useEffect, useState } from 'react';

import { Octokit } from 'octokit';

import { Chip, Skeleton, Tooltip, Typography } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import WorkIcon from '@mui/icons-material/Work';

import { username } from '../config';

import { UserFull } from '../types/types';

import { initialUserFull } from '../utils/initialObjects';

import './Info.css';

const ProfilePicture = ({ url }: { url: string }): JSX.Element => {
  const style = {
    backgroundColor: '#5e707a',
    color: '#5e707a',
    height: '200px',
    margin: '2rem auto',
    width: '200px'
  };

  if (url === 'avatar_url') {
    return (
      <Skeleton
        style={style}
        variant='circular'
      />
    );
  }

  return (
    <img
      alt='Profile picture'
      className='picture'
      src={url}
      title='This is me!'
    />
  );
};

const Name = ({ name }: { name: string }): JSX.Element => (
  <Typography variant='h4' component='h1'>
    {name}
  </Typography>
);

const Bio = ({ bio }: { bio: string }): JSX.Element => (
  <div className='bio'>
    <Typography variant='subtitle1' component='h2'>
      {bio}
    </Typography>
  </div>
);

const Details = ({ company, location }: { company: string, location: string }): JSX.Element => (
  <>
    <Company company={company} />
    <Location location={location} />
  </>
);

const Company = ({ company }: { company: string }): JSX.Element => (
  <div className='detail'>
    <Tooltip arrow enterTouchDelay={0} title='Company'>
      <Chip color='primary' icon={<WorkIcon fontSize='small'/>} label={company} />
    </Tooltip>
  </div>
);

const Location = ({ location }: { location: string }): JSX.Element => (
  <div className='detail'>
    <Tooltip arrow enterTouchDelay={0} title='Location'>
      <Chip color='primary' icon={<PlaceIcon fontSize='small'/>} label={location} />
    </Tooltip>
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
  }, []);

  return (
    <div className='info'>
      <ProfilePicture url={user.avatar_url} />
      <Name name={user.name} />
      <Bio bio={user.bio} />
      <Details company={user.company} location={user.location} />
    </div>
  );
};

export default Info;
