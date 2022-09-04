import Link from '@mui/material/Link';

import { name, url, username } from '../../config';

import './Footer.css';

const Footer = () => {
  let address = url;
  const source = `https://github.com/${username}/${username}.github.io`;
  if (!url) address = `${username}.github.io`;

  return (
    <div className='footer'>
      <hr/>
      {address} | {name} | 2022 | <Link href={source} target='_blank'>Source code</Link>
    </div>
  );
};

export default Footer;
