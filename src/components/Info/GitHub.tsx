import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';

import GitHubIcon from '@mui/icons-material/GitHub';

const GitHub = ({ username }: { username: string }): JSX.Element => (
  <div className="detail">
    <Tooltip arrow enterTouchDelay={0} title="GitHub">
      <Link href={`https://github.com/${username}`} target="_blank">
        <Chip color="primary" icon={<GitHubIcon fontSize="small"/>} label={username} />
      </Link>
    </Tooltip>
  </div>
);

export default GitHub;
