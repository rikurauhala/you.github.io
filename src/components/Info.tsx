import profilePicture from '../assets/images/riku.jpg';

import ageIcon from '../assets/icons/details/age.svg';
import sexIcon from '../assets/icons/details/sex.svg';
import locIcon from '../assets/icons/details/loc.svg';

import ghIcon from '../assets/icons/social/gh.svg';
import liIcon from '../assets/icons/social/li.svg';

import './Info.css';

const Info = () => {
  return (
    <div className='info'>
      <img
        alt='Profile picture'
        className='picture'
        src={profilePicture as string}
        title='This is me!'
      /> 
      <h1>Riku Rauhala</h1>
      <p className='title'>
        Computer science student at&nbsp;
        <a href='https://www.helsinki.fi/' target='_blank'>
          University of Helsinki
        </a>
      </p>
      <p className='details'>
        <img src={ageIcon as string} className='icon-info' title='Age' /> 26 |&nbsp;
        <img src={sexIcon as string} className='icon-info' title='Sex' /> M |&nbsp;
        <img src={locIcon as string} className='icon-info' title='Location' /> Finland
      </p>
      <a href='https://github.com/rikurauhala' className='link-social' target='_blank'>
        <img
          className='icon-social'
          src={ghIcon as string}
          title='See my code on GitHub'
        />
      </a>
      <a href='https://www.linkedin.com/in/rikurauhala/' className='link-social' target='_blank'>
        <img
          className='icon-social'
          src={liIcon as string}
          title='Connect with me on LinkedIn'
        />
      </a>
    </div>
  );
};

export default Info;
