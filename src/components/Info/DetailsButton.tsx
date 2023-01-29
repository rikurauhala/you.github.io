import { ReactElement } from 'react';

import Button from '@mui/material/Button';

interface FooterButtonProps {
  icon: ReactElement
  text: string
  url: string
}

const DetailsButton = ({ icon, text, url }: FooterButtonProps): JSX.Element => (
  <Button
    color="primary"
    href={url}
    size="small"
    startIcon={icon}
    target="_blank"
    variant="outlined"
  >
    {text}
  </Button>
);

export default DetailsButton;
