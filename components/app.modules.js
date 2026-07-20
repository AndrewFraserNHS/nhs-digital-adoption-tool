// Minimal app modules: AppState singleton and initializer
(function(ns){
    const AppState = (function(){
        let instance;
        function create(){
            return {
                orgProfile: Object.assign({}, ns.CONSTANTS.INITIAL_ORG_PROFILE),
                history: [],
                currentDraft: {}
            };
        }

        return {
            getInstance: function(){
                if (!instance) {
instance = create();
}
                return instance;
            }
        };
    })();

    function init(){
        const state = AppState.getInstance();
        console.info('NHSDigitalAdoption initialized', state);
        // Hookpoints for future component initialisation
        // e.g., Dashboard.init(state), Assessment.init(state)
    }

    ns.App = ns.App || {};
    ns.App.State = AppState;
    ns.App.init = init;

    // Auto-init on DOMContentLoaded
    if (document.readyState === 'loading'){
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})(window.NHSDigitalAdoption);
