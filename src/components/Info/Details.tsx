import Stack from '@mui/material/Stack';

import PlaceIcon from '@mui/icons-material/Place';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import WorkIcon from '@mui/icons-material/Work';

import DetailsButton from './DetailsButton';

interface DetailsProps {
  company: string,
  location: string,
  github: string,
  twitter: string
}

const Details = ({ company, location, github, twitter }: DetailsProps): JSX.Element => (
  <Stack direction="row" justifyContent="center" spacing={1}>
    {
      company &&
      <DetailsButton
        icon={<WorkIcon />}
        text={company}
        url=""
      />
    }
    {
      location &&
      <DetailsButton
        icon={<PlaceIcon />}
        text={location}
        url=""
      />
    }
    {
      github &&
      <DetailsButton
        icon={<GitHubIcon />}
        text={github}
        url={`https://github.com/${github}`}
      />
    }
    {
      twitter &&
      <DetailsButton
        icon={<TwitterIcon />}
        text={twitter}
        url={`https://twitter.com/${twitter}`}
      />
    }
  </Stack>
);

export default Details;
