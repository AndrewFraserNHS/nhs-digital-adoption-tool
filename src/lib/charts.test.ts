import { beforeEach, describe, expect, it, vi } from 'vitest';

import { createChart, createRadarChart, wrapChartLabel } from './charts';

interface MockChartConfig {
  options?: {
    scales?: {
      r?: {
        pointLabels?: {
          display?: boolean;
          callback?: (value: string) => string;
        };
      };
    };
  };
}

vi.mock('chart.js/auto', () => {
  class MockChart {
    canvas: HTMLCanvasElement;
    config: MockChartConfig;

    static defaults = {
      font: {},
      elements: {
        line: {},
        point: {},
      },
    };

    static getChart = vi.fn();
    static register = vi.fn();

    constructor(canvas: HTMLCanvasElement, config: MockChartConfig) {
      this.canvas = canvas;
      this.config = config;
    }

    destroy = vi.fn();
  }

  return {
    __esModule: true,
    default: MockChart,
  };
});

import Chart from 'chart.js/auto';

describe('wrapChartLabel', () => {
  it('wraps long lens titles onto multiple lines', () => {
    expect(wrapChartLabel('People Experience and Culture')).toEqual([
      'People Experience',
      'and Culture',
    ]);
    expect(wrapChartLabel('Process and Sustainment')).toEqual(['Process and', 'Sustainment']);
  });
});

describe('createChart', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('destroys an existing chart before reusing the same canvas', () => {
    const canvas = document.createElement('canvas');
    const existingChart = { destroy: vi.fn() };
    vi.mocked(Chart.getChart).mockReturnValue(existingChart);

    createChart('line', canvas, { labels: [], datasets: [] });

    expect(existingChart.destroy).toHaveBeenCalledTimes(1);
  });

  it('uses wrapped multiline labels for radar charts', () => {
    const canvas = document.createElement('canvas');
    const chart = createRadarChart(canvas, {
      labels: ['People Experience and Culture'],
      datasets: [],
    });
    const options = (chart as unknown as { config: MockChartConfig }).config.options;

    expect(options?.scales?.r?.pointLabels?.display).toBe(false);
    expect(options?.scales?.r?.pointLabels?.callback?.('People Experience and Culture')).toBe(
      'People Experience\nand Culture'
    );
  });
});
