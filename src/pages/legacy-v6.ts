import React from 'react';
import ReactDOM from 'react-dom/client';
import '@lib/state';
import AdoptionApp from './AdoptionApp';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (!app) {
return;
}
  
  try {
    const root = ReactDOM.createRoot(app);
    root.render(React.createElement(AdoptionApp));
  } catch (err) {
    app.innerHTML = `<pre style="color:red">Error loading Adoption App: ${err}</pre>`;
  }
});

export {};
