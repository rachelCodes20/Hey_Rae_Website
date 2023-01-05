import React from 'react';
import Button from '@mui/material/Button';
import '../styles/Modal.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#2196f3',
      darker: '#01579b',
    },
    neutral: {
      main: '#01579b',
      contrastText: '#ffff',
    },
  },
});

function Modal ({ closeModal }) {
  return (
    <div className="modalBackground">
        <div className="button-container">
      <div className="modalButton">
        <ThemeProvider theme={theme}>
            <Button className="mdc-button mdc-button--touch" variant="contained" onClick={() => closeModal(false)}>
            <span className="mdc-button__label">Enter Rae's Realm...</span>
            </Button>
        </ThemeProvider>
      </div>
      </div>
    </div>
    
  );
}

export default Modal; 
