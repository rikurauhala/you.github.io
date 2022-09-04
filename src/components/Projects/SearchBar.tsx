import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';

const SearchBar = ({ setState }: { setState: (arg0: string) => void }) => {
  const style = {
    alignItems: 'center',
    backgroundColor: '#051222',
    border: '#0f3552 1px solid',
    display: 'flex',
    height: '45px',
    margin: '15px 0',
    padding: '2px 4px'
  };

  return (
    <Paper component='form' style={style}>
      <InputBase
        inputProps={{ 'aria-label': 'Search' }}
        onChange={event => setState(event.target.value)}
        onKeyPress={event => {event.key === 'Enter' && event.preventDefault();}}
        placeholder='Search'
        sx={{ color: '#fff', flex: 1, ml: 1 }}
      />
    </Paper>
  );
};

export default SearchBar;
