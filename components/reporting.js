// Reporting helpers: generate HTML report and CSV exports
(function(ns){
    function generateMaturityReportHTML(state){
        const org = state.orgProfile || {};
        const overall = state.history && state.history.length ? state.history[state.history.length-1].overallPercentage : 'N/A';
        let html = `<div class="component-wrap"><h1>Maturity Assessment Report</h1><p><strong>Organisation:</strong> ${org.trustName||''} - <strong>Project:</strong> ${org.projectName||''}</p><p><strong>Overall:</strong> ${overall}%</p>`;
        html += '<table class="action-plan-table w-full border-collapse"><thead><tr><th>Component</th><th>Lens</th><th>Score</th><th>Justification</th></tr></thead><tbody>';
        const draft = state.currentDraft || {};
        Object.keys(draft).forEach(compId => {
            const comp = (ns.CONSTANTS.COMPONENTS.find(c=>c.id===compId) || { label: compId });
            const lenses = draft[compId];
            Object.keys(lenses).forEach(lensName => {
                const cell = lenses[lensName];
                html += `<tr><td>${comp.label}</td><td>${lensName}</td><td>${cell.score||0}</td><td>${(cell.justification||'')}</td></tr>`;
            });
        });
        html += '</tbody></table></div>';
        return html;
    }

    function exportMaturityCSV(state){
        const rows = [['Component','Lens','Score','Justification']];
        const draft = state.currentDraft || {};
        Object.keys(draft).forEach(compId => {
            const comp = (ns.CONSTANTS.COMPONENTS.find(c=>c.id===compId) || { label: compId });
            const lenses = draft[compId];
            Object.keys(lenses).forEach(lensName => {
                const cell = lenses[lensName];
                rows.push([comp.label, lensName, cell.score||0, cell.justification||'']);
            });
        });
        const csv = rows.map(r => r.map(ns.Utils.escapeCSV).join(',')).join('\n');
        ns.Utils.downloadCSV(csv, 'maturity-report.csv');
    }

    ns.Reporting = { generateMaturityReportHTML, exportMaturityCSV };
})(window.NHSDigitalAdoption || (window.NHSDigitalAdoption = {}));
