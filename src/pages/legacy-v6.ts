import '@lib/state';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (!app) return;
  import('@components/organisms/AdoptionToolPage')
    .then(m => m.mountAdoptionTool(app))
    .catch(err => { app.innerHTML = `<pre style="color:red">Error loading AdoptionToolPage: ${err}</pre>`; });
});

export {};
