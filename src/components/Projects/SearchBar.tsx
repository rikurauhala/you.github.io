import Paper from '@mui/material/Paper';

import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const style = {
    alignItems: 'center',
    backgroundColor: '#051222',
    border: '#0f3552 1px solid',
    display: 'flex',
    padding: '2px 4px'
  };

  return (
    <div style={{margin: '15px 0'}}>
      <Paper component='form' style={style}>
        <InputBase
          inputProps={{ 'aria-label': 'Search' }}
          placeholder='Search'
          sx={{ color: '#fff', flex: 1, ml: 1 }}
        />
        <IconButton aria-label='search' sx={{ color: '#fff', padding: '10px' }} type='button'>
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchBar;
