import Company from './Company';
import Location from './Location';
import Twitter from './Twitter';

const Details = ({ company, location, twitter }: { company: string, location: string, twitter: string }): JSX.Element => (
  <>
    {company && <Company company={company} />}
    {location && <Location location={location} />}
    {twitter && <Twitter username={twitter} />}
  </>
);

export default Details;
