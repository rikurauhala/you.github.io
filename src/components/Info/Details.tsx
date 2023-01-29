import Stack from '@mui/material/Stack';

import Company from './Company';
import Location from './Location';
import GitHub from './GitHub';
import Twitter from './Twitter';

interface DetailsProps {
  company: string,
  location: string,
  github: string,
  twitter: string
}

const Details = ({ company, location, github, twitter }: DetailsProps): JSX.Element => (
  <Stack direction="row" justifyContent="center" spacing={1}>
    {company && <Company company={company} />}
    {location && <Location location={location} />}
    {github && <GitHub username={github} />}
    {twitter && <Twitter username={twitter} />}
  </Stack>
);

export default Details;
