import { Helmet } from 'react-helmet';

import { name } from './config';

const Meta = (): JSX.Element => {
  const first = name[0].toString().toLowerCase();
  const letter = /[a-z]/.test(first) ? first : '-';

  return(
    <Helmet>
      <title>{name}</title>
      <meta content={`Personal home page of ${name}`} name="description" />
      <link href={`favicon/${letter}.ico`} rel="icon" />
    </Helmet>
  );
};

export default Meta;
