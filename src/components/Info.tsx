import { useEffect, useState } from 'react';

import { Chip, Skeleton, Tooltip, Typography } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import WorkIcon from '@mui/icons-material/Work';

import octokitService from '../services/octokit';

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

  const setState = (userFromAPI: UserFull) => {
    setUser(userFromAPI);
  };

  useEffect(() => {
    void octokitService.getUser(setState);
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
