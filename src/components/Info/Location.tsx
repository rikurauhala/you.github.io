import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';

import PlaceIcon from '@mui/icons-material/Place';

const Location = ({ location }: { location: string }): JSX.Element => (
  <div className='detail'>
    <Tooltip arrow enterTouchDelay={0} title='Location'>
      <Chip color='primary' icon={<PlaceIcon fontSize='small'/>} label={location} />
    </Tooltip>
  </div>
);

export default Location;
