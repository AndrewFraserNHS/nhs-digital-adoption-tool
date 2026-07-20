import '@lib/state';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (!app) return;
  import('@components/organisms/MaturityAssessmentPage')
    .then(m => m.mountMaturityAssessment(app))
    .catch(err => { app.innerHTML = `<pre style="color:red">Error loading MaturityAssessmentPage: ${err}</pre>`; });
});

export {};
