import { Chip, Link, Tooltip } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';

const GitHub = ({ username }: { username: string }): JSX.Element => (
  <div className='detail'>
    <Tooltip arrow enterTouchDelay={0} title='GitHub'>
      <Link href={`https://github.com/${username}`}>
        <Chip color='primary' icon={<GitHubIcon fontSize='small'/>} label={username} />
      </Link>
    </Tooltip>
  </div>
);

export default GitHub;
