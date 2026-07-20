import React from 'react';
import ReactDOM from 'react-dom/client';
import '@lib/state';
import MaturityApp from './MaturityApp';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (!app) {
return;
}
  
  try {
    const root = ReactDOM.createRoot(app);
    root.render(React.createElement(MaturityApp));
  } catch (err) {
    app.innerHTML = `<pre style="color:red">Error loading Maturity App: ${err}</pre>`;
  }
});

export {};
