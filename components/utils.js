// Utilities: CSV export and small helpers
(function(ns){
    function escapeCSV(val){
        if (val === null || val === undefined) return '';
        const s = String(val);
        if (s.includes(',') || s.includes('\n') || s.includes('"')){
            return '"' + s.replace(/"/g, '""') + '"';
        }
        return s;
    }

    function downloadCSV(content, name){
        const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
        URL.revokeObjectURL(url);
    }

    ns.Utils = { escapeCSV, downloadCSV };
})(window.NHSDigitalAdoption || (window.NHSDigitalAdoption = {}));
