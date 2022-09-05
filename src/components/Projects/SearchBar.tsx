import { useRef } from 'react';

import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';

import ClearIcon from '@mui/icons-material/Clear';

interface Props {
  searchQuery: string
  setSearchQuery: (arg0: string) => void
}

const SearchBar = ({ searchQuery, setSearchQuery }: Props) => {
  const style = {
    alignItems: 'center',
    backgroundColor: '#051222',
    border: '#0f3552 1px solid',
    display: 'flex',
    height: '45px',
    margin: '15px 0',
    padding: '2px 4px'
  };

  interface Ref {
    value: string
  }

  const userInput = useRef<Ref>({value: ''});

  return (
    <Paper component='form' style={style}>
      <InputBase
        inputRef={userInput}
        onChange={event => setSearchQuery(event.target.value)}
        onKeyPress={event => event.key === 'Enter' && event.preventDefault()}
        placeholder='Search'
        sx={{ color: '#fff', flex: 1, ml: 1 }}
      />
      { searchQuery.length > 0 &&
        <IconButton
          color="primary" sx={{ p: '10px' }}
          onClick={() => {
            userInput.current.value = '';
            setSearchQuery('');
          }}
        >
          <ClearIcon />
        </IconButton>
      }
    </Paper>
  );
};

export default SearchBar;
