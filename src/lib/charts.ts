import Chart, { ChartConfiguration, ChartType, Plugin } from 'chart.js/auto';

interface CenterTextConfig {
  text?: string;
  font?: string;
  color?: string;
  subText?: string;
  subFont?: string;
  subColor?: string;
}

interface RadarScaleAdapter {
  options?: {
    pointLabels?: {
      font?: { size?: number; family?: string };
      color?: string;
      padding?: number;
    };
  };
  _pointLabels?: string[];
  drawingArea: number;
  getPointPosition: (
    index: number,
    distanceFromCenter: number,
    angle: number
  ) => { x: number; y: number };
}

export function wrapChartLabel(label: string): string[] {
  if (!label) {
    return [];
  }

  const words = label.split(/\s+/).filter(Boolean);
  if (words.length < 2) {
    return words;
  }

  const firstLine = words.slice(0, Math.ceil(words.length / 2)).join(' ');
  const secondLine = words.slice(Math.ceil(words.length / 2)).join(' ');
  return [firstLine, secondLine].filter(Boolean);
}

function resolveCanvas(ctx: CanvasRenderingContext2D | HTMLCanvasElement) {
  if ((ctx as HTMLCanvasElement).getContext) {
    return ctx as HTMLCanvasElement;
  }
  return (ctx as CanvasRenderingContext2D).canvas as HTMLCanvasElement;
}

function isDarkThemeEnabled(): boolean {
  if (typeof document === 'undefined') {
    return false;
  }
  return document.documentElement.dataset.nhsThemeMode === 'dark';
}

export function createChart(
  type: ChartType,
  ctx: CanvasRenderingContext2D | HTMLCanvasElement,
  data: ChartConfiguration['data'],
  options: ChartConfiguration['options'] = {}
) {
  const canvas = resolveCanvas(ctx);
  const existingChart = (
    Chart as typeof Chart & { getChart?: (canvas: HTMLCanvasElement) => Chart | null }
  ).getChart?.(canvas);

  if (existingChart) {
    existingChart.destroy();
  }

  const cfg: ChartConfiguration = { type, data, options };
  return new Chart(canvas, cfg);
}

export function createRadarChart(
  ctx: CanvasRenderingContext2D | HTMLCanvasElement,
  data: ChartConfiguration<'radar'>['data'],
  options: ChartConfiguration<'radar'>['options'] = {}
) {
  // sensible defaults to better match legacy rendering
  Chart.defaults.font.family =
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial";
  Chart.defaults.font.size = 12;
  Chart.defaults.elements.line.tension = 0.2;
  Chart.defaults.elements.point.radius = 4;
  Chart.defaults.elements.point.hoverRadius = 6;

  const darkMode = isDarkThemeEnabled();
  const labelColor = darkMode ? '#e2e8f0' : '#0b1220';
  const gridColor = darkMode ? 'rgba(226,232,240,0.12)' : 'rgba(11,18,32,0.06)';
  const angleColor = darkMode ? 'rgba(226,232,240,0.18)' : 'rgba(11,18,32,0.10)';
  const lineBorder = darkMode ? '#63b3ff' : '#005EB8';
  const lineFill = darkMode ? 'rgba(99,179,255,0.12)' : 'rgba(0,94,184,0.06)';
  const pointColor = darkMode ? 'rgba(144,205,244,0.95)' : 'rgba(11,122,184,0.95)';

  const defaultOpts = {
    maintainAspectRatio: true,
    responsive: true,
    layout: { padding: 56 },
    plugins: {
      legend: { display: true, position: 'bottom' },
      tooltip: {
        enabled: true,
        backgroundColor: darkMode ? 'rgba(15,23,42,0.98)' : 'rgba(11,18,32,0.95)',
        titleColor: '#fff',
        bodyColor: '#fff',
      },
      centerText: '',
    },
    elements: {
      line: { borderWidth: 3, tension: 0.2, borderColor: lineBorder, backgroundColor: lineFill },
      point: { radius: 4, hoverRadius: 6, backgroundColor: pointColor },
    },
    scales: {
      r: {
        beginAtZero: true,
        grid: { color: gridColor, lineWidth: 1 },
        angleLines: { color: angleColor, lineWidth: 1 },
        ticks: { display: false },
        pointLabels: {
          display: false,
          color: labelColor,
          font: { size: 12, family: Chart.defaults.font.family },
          padding: 10,
          callback: (value: string) => wrapChartLabel(value).join('\n'),
        },
      },
    },
  };

  const mergedOptions = {
    ...defaultOpts,
    ...options,
    layout: { padding: 56, ...(options.layout || {}) },
    scales: {
      ...(defaultOpts.scales || {}),
      ...(options.scales || {}),
      r: {
        ...(defaultOpts.scales?.r || {}),
        ...(options.scales?.r || {}),
        pointLabels: {
          ...(defaultOpts.scales?.r?.pointLabels || {}),
          ...(options.scales?.r?.pointLabels || {}),
          display: false,
          callback: (value: string) => wrapChartLabel(value).join('\n'),
        },
      },
    },
  };

  return createChart('radar', ctx, data, mergedOptions);
}

export function createLineChart(
  ctx: CanvasRenderingContext2D | HTMLCanvasElement,
  data: ChartConfiguration<'line'>['data'],
  options: ChartConfiguration<'line'>['options'] = {}
) {
  const darkMode = isDarkThemeEnabled();
  const tickColor = darkMode ? '#e2e8f0' : '#0b1220';
  const xGridColor = darkMode ? 'rgba(226,232,240,0.08)' : 'rgba(11,18,32,0.04)';
  const yGridColor = darkMode ? 'rgba(226,232,240,0.10)' : 'rgba(11,18,32,0.06)';
  const lineBorder = darkMode ? '#63b3ff' : '#005EB8';
  const lineFill = darkMode ? 'rgba(99,179,255,0.14)' : 'rgba(0,94,184,0.06)';
  const defaultOpts = {
    elements: {
      line: { borderWidth: 2, tension: 0.2, borderColor: lineBorder, backgroundColor: lineFill },
      point: { radius: 3, hoverRadius: 5, backgroundColor: lineBorder },
    },
    scales: {
      x: {
        display: true,
        grid: { color: xGridColor },
        ticks: { color: tickColor, font: { size: 11 } },
      },
      y: {
        beginAtZero: true,
        grid: { color: yGridColor },
        ticks: { color: tickColor, font: { size: 11 } },
      },
    },
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
      const opts = (chart.options || {}) as {
        plugins?: { centerText?: string | CenterTextConfig };
      };
      const centerCfg = opts.plugins?.centerText;
      const txt = centerCfg?.text || centerCfg || '';
      if (!txt) {
        return;
      }

      const chartType = String(chart.config.type || '');
      if (chartType !== 'radar' && chartType !== 'doughnut') {
        return;
      }

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
        ctx.fillStyle = centerCfg?.color || (isDarkThemeEnabled() ? '#e2e8f0' : '#0b1220');
        const lines = String(txt).split('\n');
        const lineHeight = size * 1.05;
        const offset = ((lines.length - 1) * -lineHeight) / 2;
        lines.forEach((line: string, i: number) => {
          ctx.fillText(line, x, y + offset + i * lineHeight);
        });
      }
      ctx.restore();
    } catch (_e) {
      // ignore rendering errors
    }
  },
};

const radarPointLabelPlugin: Plugin = {
  id: 'radarPointLabelText',
  afterDraw: (chart) => {
    try {
      const scale = chart.scales?.r as unknown as RadarScaleAdapter | undefined;
      const pointLabels = scale?.options?.pointLabels;
      if (!scale || !pointLabels || chart.config.type !== 'radar') {
        return;
      }

      const ctx = chart.ctx;
      const fontSize = Number(pointLabels.font?.size || Chart.defaults.font.size || 12);
      const fontFamily =
        pointLabels.font?.family || Chart.defaults.font.family || 'Inter, sans-serif';
      const color = pointLabels.color || (isDarkThemeEnabled() ? '#e2e8f0' : '#0b1220');
      const padding = Number(pointLabels.padding ?? 14);
      const labels = Array.isArray(scale._pointLabels) ? scale._pointLabels : [];

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = color;
      ctx.font = `${fontSize}px ${fontFamily}`;

      labels.forEach((label: string, index: number) => {
        const text = String(label ?? '');
        const lines = text.split('\n').filter(Boolean);
        if (!lines.length) {
          return;
        }

        const position = scale.getPointPosition(index, scale.drawingArea + padding, 0);
        const lineHeight = fontSize * 1.15;
        const offset = ((lines.length - 1) * -lineHeight) / 2;
        const labelHeight = Math.max(fontSize, lines.length * lineHeight);
        const labelWidth = fontSize * 6;
        const minX = labelWidth / 2 + 4;
        const maxX = chart.width - labelWidth / 2 - 4;
        const minY = labelHeight / 2 + 4;
        const maxY = chart.height - labelHeight / 2 - 4;
        const clampedX = Math.min(Math.max(position.x, minX), maxX);
        const clampedY = Math.min(Math.max(position.y, minY), maxY);

        lines.forEach((line: string, lineIndex: number) => {
          const y = clampedY + offset + lineIndex * lineHeight;
          ctx.fillText(line, clampedX, y);
        });
      });

      ctx.restore();
    } catch (_error) {
      // ignore rendering errors
    }
  },
};

Chart.register(radarCenterPlugin, radarPointLabelPlugin);

// Register minimal global adapter for legacy pages
if (typeof window !== 'undefined') {
  window.NHSDigitalAdoption = window.NHSDigitalAdoption || {};
  window.NHSDigitalAdoption.Charts = {
    createRadarChart,
    createLineChart,
    toBase64Image,
  };
}

export default { createRadarChart, createLineChart, toBase64Image, createChart };
