import Company from './Company';
import Location from './Location';
import Twitter from './Twitter';

interface DetailsProps {
  company: string,
  location: string,
  twitter: string
}

const Details = ({ company, location, twitter }: DetailsProps): JSX.Element => (
  <>
    {company && <Company company={company} />}
    {location && <Location location={location} />}
    {twitter && <Twitter username={twitter} />}
  </>
);

export default Details;
