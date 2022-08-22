import Company from './Company';
import Location from './Location';

const Details = ({ company, location }: { company: string, location: string }): JSX.Element => (
  <>
    {company && <Company company={company} />}
    {location && <Location location={location} />}
  </>
);

export default Details;
