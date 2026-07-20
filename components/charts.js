// Chart helpers: register plugins and provide simple chart factories
(function(ns){
    function registerPlugins(Chart){
        // center text plugin (lightweight)
        const centerText = {
            id: 'centerText',
            beforeDraw: function(chart){
                const txt = chart.config.options.plugins.centerText && chart.config.options.plugins.centerText.text;
                if (!txt) {
return;
}
                const ctx = chart.ctx;
                const width = chart.width;
                const height = chart.height;
                ctx.save();
                ctx.font = '600 18px Arial';
                ctx.fillStyle = '#374151';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(txt, width/2, height/2);
                ctx.restore();
            }
        };
        if (Chart && !Chart.registry.plugins.get(centerText.id)) {
Chart.register(centerText);
}
    }

    function createRadarChart(ctx, labels, datasets, options){
        if (!window.Chart) {
throw new Error('Chart.js not available');
}
        registerPlugins(window.Chart);
        const cfg = {
            type: 'radar',
            data: { labels, datasets },
            options: Object.assign({ responsive: true, maintainAspectRatio: false }, options || {})
        };
        return new Chart(ctx, cfg);
    }

    function createLineChart(ctx, labels, datasets, options){
        if (!window.Chart) {
throw new Error('Chart.js not available');
}
        const cfg = {
            type: 'line',
            data: { labels, datasets },
            options: Object.assign({ responsive: true, maintainAspectRatio: false }, options || {})
        };
        return new Chart(ctx, cfg);
    }

    function toBase64Image(chart){
 return chart.toBase64Image(); 
}

    ns.Charts = { createRadarChart, createLineChart, toBase64Image };
})(window.NHSDigitalAdoption || (window.NHSDigitalAdoption = {}));
