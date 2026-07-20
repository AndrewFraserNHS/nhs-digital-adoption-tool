// Storage helper: manages localStorage persistence and export/import
(function(ns){
    const KEY = 'nhsDigitalAdoptionData';

    function load(){
        try{
            const raw = localStorage.getItem(KEY);
            return raw ? JSON.parse(raw) : null;
        }catch(e){ console.error('Failed to load state', e); return null; }
    }

    function save(state){
        try{ localStorage.setItem(KEY, JSON.stringify(state)); return true; }
        catch(e){ console.error('Failed to save state', e); return false; }
    }

    function clear(){ localStorage.removeItem(KEY); }

    function exportJSON(state){
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
        const a = document.createElement('a'); a.setAttribute('href', dataStr);
        a.setAttribute('download', `NHS_Adoption_${(state.orgProfile||{}).trustName||'export'}.json`);
        document.body.appendChild(a); a.click(); a.remove();
    }

    function importFromFile(file, onLoad){
        const reader = new FileReader();
        reader.onload = (e) => { try{ const parsed = JSON.parse(e.target.result); onLoad(parsed); }catch(err){ console.error(err); alert('Invalid file'); } };
        reader.readAsText(file);
    }

    ns.Storage = { load, save, clear, exportJSON, importFromFile };
})(window.NHSDigitalAdoption || (window.NHSDigitalAdoption = {}));
