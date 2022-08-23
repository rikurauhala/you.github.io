import { Chip, Tooltip } from '@mui/material';

import TwitterIcon from '@mui/icons-material/Twitter';

const Twitter = ({ username }: { username: string }): JSX.Element => (
  <div className='detail'>
    <Tooltip arrow enterTouchDelay={0} title='Twitter'>
      <Chip color='primary' icon={<TwitterIcon fontSize='small'/>} label={username} />
    </Tooltip>
  </div>
);

export default Twitter;
