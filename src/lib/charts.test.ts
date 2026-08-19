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
  it('SHOULD wrap long lens titles onto multiple lines', () => {
    // arrange + act + assert
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

  it('SHOULD destroy an existing chart before reusing the same canvas', () => {
    // arrange
    const canvas = document.createElement('canvas');
    const existingChart = { destroy: vi.fn() };
    vi.mocked(Chart.getChart).mockReturnValue(existingChart);

    // act
    createChart('line', canvas, { labels: [], datasets: [] });

    // assert
    expect(existingChart.destroy).toHaveBeenCalledTimes(1);
  });

  it('SHOULD use wrapped multiline labels for radar charts', () => {
    // arrange
    const canvas = document.createElement('canvas');

    // act
    const chart = createRadarChart(canvas, {
      labels: ['People Experience and Culture'],
      datasets: [],
    });
    const options = (chart as unknown as { config: MockChartConfig }).config.options;

    // assert
    expect(options?.scales?.r?.pointLabels?.display).toBe(false);
    expect(options?.scales?.r?.pointLabels?.callback?.('People Experience and Culture')).toBe(
      'People Experience\nand Culture'
    );
  });
});
