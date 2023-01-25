import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';

import TwitterIcon from '@mui/icons-material/Twitter';

const Twitter = ({ username }: { username: string }): JSX.Element => (
  <div className="detail">
    <Tooltip arrow enterTouchDelay={0} title="Twitter">
      <Link href={`https://twitter.com/${username}`}>
        <Chip color="primary" icon={<TwitterIcon fontSize="small"/>} label={username} />
      </Link>
    </Tooltip>
  </div>
);

export default Twitter;
