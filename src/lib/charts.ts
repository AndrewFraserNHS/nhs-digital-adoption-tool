import Chart, { ChartType, ChartConfiguration, Plugin } from 'chart.js/auto';

function resolveCanvas(ctx: CanvasRenderingContext2D | HTMLCanvasElement) {
  if ((ctx as HTMLCanvasElement).getContext) return ctx as HTMLCanvasElement;
  return (ctx as CanvasRenderingContext2D).canvas as HTMLCanvasElement;
}

export function createChart(type: ChartType, ctx: CanvasRenderingContext2D | HTMLCanvasElement, data: any, options: any = {}) {
  const canvas = resolveCanvas(ctx);
  const cfg: ChartConfiguration = { type, data, options } as ChartConfiguration;
  return new Chart(canvas, cfg);
}

export function createRadarChart(ctx: CanvasRenderingContext2D | HTMLCanvasElement, data: any, options: any = {}) {
  // sensible defaults to better match legacy rendering
  Chart.defaults.font.family = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial";
  Chart.defaults.font.size = 12;
  Chart.defaults.elements.line.tension = 0.2;
  Chart.defaults.elements.point.radius = 4;
  Chart.defaults.elements.point.hoverRadius = 6;

  const defaultOpts = {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true, backgroundColor: 'rgba(11,18,32,0.95)', titleColor: '#fff', bodyColor: '#fff' },
      centerText: '',
    },
    elements: {
      line: { borderWidth: 3, tension: 0.2, borderColor: '#005EB8', backgroundColor: 'rgba(0,94,184,0.06)' },
      point: { radius: 4, hoverRadius: 6, backgroundColor: 'rgba(11,122,184,0.95)' }
    },
    scales: {
      r: {
        beginAtZero: true,
        grid: { color: 'rgba(11,18,32,0.06)', lineWidth: 1 },
        angleLines: { color: 'rgba(11,18,32,0.10)', lineWidth: 1 },
        ticks: { display: false },
        pointLabels: { color: '#0b1220', font: { size: 12, family: Chart.defaults.font.family } }
      }
    }
  };

  return createChart('radar', ctx, data, { ...defaultOpts, ...options });
}

export function createLineChart(ctx: CanvasRenderingContext2D | HTMLCanvasElement, data: any, options: any = {}) {
  const defaultOpts = {
    elements: {
      line: { borderWidth: 2, tension: 0.2, borderColor: '#005EB8', backgroundColor: 'rgba(0,94,184,0.06)' },
      point: { radius: 3, hoverRadius: 5, backgroundColor: '#005EB8' }
    },
    scales: {
      x: { display: true, grid: { color: 'rgba(11,18,32,0.04)' }, ticks: { color: '#0b1220', font: { size: 11 } } },
      y: { beginAtZero: true, grid: { color: 'rgba(11,18,32,0.06)' }, ticks: { color: '#0b1220', font: { size: 11 } } }
    }
  };
  return createChart('line', ctx, data, { ...defaultOpts, ...options });
}

export function toBase64Image(chart: Chart): string {
  // Chart.js exposes toBase64Image on the instance
  // @ts-ignore
  return typeof chart.toBase64Image === 'function' ? chart.toBase64Image() : '';
}

// helper plugin: draw center text for radar and doughnut charts
const radarCenterPlugin: Plugin = {
  id: 'radarCenterText',
  beforeDraw: (chart) => {
    try {
      const ctx = chart.ctx;
      const opts = (chart.options as any) || {};
      const centerCfg = opts.plugins?.centerText;
      const txt = centerCfg?.text || centerCfg || '';
      if (!txt) return;

      const chartType = String((chart.config as any)?.type || '');
      if (chartType !== 'radar' && chartType !== 'doughnut') return;

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const x = chart.width / 2;
      const y = chart.height / 2;

      if (chartType === 'doughnut') {
        ctx.font = centerCfg?.font || 'bold 20px Inter';
        ctx.fillStyle = centerCfg?.color || '#005EB8';
        ctx.fillText(String(txt), x, y - 10);
        if (centerCfg?.subText) {
          ctx.font = centerCfg?.subFont || '12px Inter';
          ctx.fillStyle = centerCfg?.subColor || '#6b7280';
          ctx.fillText(String(centerCfg.subText), x, y + 10);
        }
      } else {
        // radar center text supports multi-line values
        const size = Math.max(12, Math.round(Math.min(chart.width, chart.height) * 0.065));
        const font = `${size}px ${Chart.defaults.font.family}`;
        ctx.font = font;
        ctx.fillStyle = centerCfg?.color || '#0b1220';
        const lines = String(txt).split('\n');
        const lineHeight = size * 1.05;
        const offset = (lines.length - 1) * -lineHeight / 2;
        lines.forEach((line: string, i: number) => {
          ctx.fillText(line, x, y + offset + i * lineHeight);
        });
      }
      ctx.restore();
    } catch (e) {
      // ignore
    }
  }
};

Chart.register(radarCenterPlugin);

// Register minimal global adapter for legacy pages
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.NHSDigitalAdoption = window.NHSDigitalAdoption || {};
  // @ts-ignore
  window.NHSDigitalAdoption.Charts = {
    createRadarChart,
    createLineChart,
    toBase64Image,
  };
}

export default { createRadarChart, createLineChart, toBase64Image, createChart };
