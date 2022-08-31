import Link from '@mui/material/Link';

import { name, repository, url } from '../../config';

import './Footer.css';

const Footer = () => (
  <div className='footer'>
    <hr/>
    {url} | {name} | 2022 | <Link href={repository}>Source code</Link>
  </div>
);

export default Footer;
