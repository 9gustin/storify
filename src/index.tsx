import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StoryProvider from './context/StoryProvider';

ReactDOM.render(
  <React.StrictMode>
    <StoryProvider>
      <App />
    </StoryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);