import Company from './Company';
import Location from './Location';

const Details = ({ company, location }: { company: string, location: string }): JSX.Element => (
  <>
    <Company company={company} />
    <Location location={location} />
  </>
);

export default Details;
