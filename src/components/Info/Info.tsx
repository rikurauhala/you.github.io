import { useEffect, useState } from 'react';

import octokitService from '../../services/octokit';

import { UserFull } from '../../types/types';

import { initialUserFull } from '../../utils/initialObjects';

import ProfilePicture from './ProfilePicture';
import Name from './Name';
import Bio from './Bio';
import Details from './Details';

import './Info.css';

const Info = (): JSX.Element => {
  const [user, setUser] = useState<UserFull>(initialUserFull);

  const setState = (userFromAPI: UserFull) => {
    setUser(userFromAPI);
  };

  useEffect(() => {
    void octokitService.getUser(setState);
  }, []);

  return (
    <div className="info">
      <ProfilePicture url={user.avatar_url} />
      <Name name={user.name} />
      <Bio bio={user.bio} />
      <Details
        company={user.company}
        github={user.login}
        location={user.location}
        twitter={user.twitter_username}
      />
    </div>
  );
};

export default Info;
