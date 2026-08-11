import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/legacy.css';
import './styles/home.css';
import './styles/colors.css';

const rootEl = document.getElementById('app');
if (!rootEl) {
  throw new Error('Root element #app is missing from index.html');
}

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
