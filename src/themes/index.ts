import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8bb4f7',
      contrastText: '#fff',
    },
    secondary: {
      main: '#e80042',
    },
    background: {
      default: '#05121c',
      paper: '#05121c',
    },
    action: {
      active: '#8bb4f7',
      hover: '#8bb4f7',
      hoverOpacity: 0.7,
      focus: '#8bb4f7',
      focusOpacity: 1,
      selected: '#8bb4f7',
      selectedOpacity: 1
    }
  },
});
