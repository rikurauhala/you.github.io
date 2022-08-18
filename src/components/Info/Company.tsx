import { Chip, Tooltip } from '@mui/material';

import WorkIcon from '@mui/icons-material/Work';

const Company = ({ company }: { company: string }): JSX.Element => (
  <div className='detail'>
    <Tooltip arrow enterTouchDelay={0} title='Company'>
      <Chip color='primary' icon={<WorkIcon fontSize='small'/>} label={company} />
    </Tooltip>
  </div>
);

export default Company;
