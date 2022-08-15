import { Link } from '@mui/material';

import { name, repository, url } from '../config';

import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <hr/>
      {url} | {name} | 2022 | <Link href={repository}>Source code</Link>
    </div>
  );
};

export default Footer;
