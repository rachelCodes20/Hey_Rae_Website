import React from 'react';
import Button from '@mui/material/Button';
import '../styles/Modal.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

function Modal({ closeModal }) {
  return (
    <div>
      <div className="modalBackground">
        <div className="button-container">
          <div className="title">Welcome!</div>
          <div className="body">
            <p>
              As a software developer with fullstack JS training. My frontend
              specialities are CSS, HTML, React and Svelte. Much of my
              development projects have utilized Node.js, SQL and NoSQL database
              technologies like MySQL and MongoDB. I enjoy creating visually and
              functionally satisfying user experiences.
            </p>
          </div>
          <div className="modalButton">
            <ThemeProvider theme={theme}>
              <Button
                className="mdc-button"
                variant="contained"
                size="large"
                onClick={() => closeModal(false)}
              >
                <span className="mdc-button__label">Enter...</span>
              </Button>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
