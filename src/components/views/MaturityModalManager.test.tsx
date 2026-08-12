import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { MaturityModalManager } from './MaturityModalManager';

vi.mock('@lib/reporting', () => ({
  generateMaturityReport: vi.fn(() => '<div>Mock Report</div>'),
}));

function buildProps() {
  return {
    modalType: 'matrix' as const,
    activeComponent: 'Vision',
    scores: { Vision: 2 },
    componentMatrix: { Vision: ['', 'One', 'Two', 'Three'] },
    guidanceData: {
      Vision: {
        purpose: 'Purpose',
        inputs: 'Inputs',
        indicators: 'Indicators',
        deliverables: 'Deliverables',
      },
    },
    reportData: {
      orgName: 'Trust',
      projectName: 'Programme',
      phase: '1 Pre-Discovery',
      rows: [{ id: 'vision', label: 'Vision', value: 2, max: 5 }],
    },
    components: ['Vision', 'Benefits'],
    onClose: vi.fn(),
    onSetScore: vi.fn(),
    onExportCsv: vi.fn(),
  };
}

describe('MaturityModalManager', () => {
  it('returns null when modalType is empty', () => {
    const props = buildProps();
    const { container } = render(<MaturityModalManager {...props} modalType="" />);
    expect(container.firstChild).toBeNull();
  });

  it('renders matrix modal and handles score selection and close', () => {
    const props = buildProps();
    render(<MaturityModalManager {...props} modalType="matrix" />);

    fireEvent.click(screen.getByTestId('maturity-matrix-score-2'));
    expect(props.onSetScore).toHaveBeenCalledWith('Vision', 2);

    fireEvent.click(screen.getByTestId('maturity-modal-close'));
    expect(props.onClose).toHaveBeenCalled();
  });

  it('renders guidance modal and shows fallback when missing guidance', () => {
    const props = buildProps();
    const { rerender } = render(<MaturityModalManager {...props} modalType="guidance" />);

    expect(screen.getByTestId('maturity-modal-guidance')).toBeInTheDocument();
    expect(screen.getByTestId('maturity-guidance-body').textContent).toContain('Purpose');
    expect(screen.getByTestId('maturity-guidance-body').textContent).toContain(
      'Inputs, tools and templates'
    );

    rerender(
      <MaturityModalManager
        {...props}
        modalType="guidance"
        activeComponent="Benefits"
        guidanceData={{}}
      />
    );
    expect(screen.getByTestId('maturity-guidance-body').textContent).toContain(
      'No guidance available.'
    );
  });

  it('renders help modal with usage guidance', () => {
    const props = buildProps();
    render(<MaturityModalManager {...props} modalType="help" />);

    expect(screen.getByTestId('maturity-modal-help')).toBeInTheDocument();
    expect(screen.getByTestId('maturity-help-heading')).toBeInTheDocument();
    expect(screen.getByTestId('maturity-modal-help').textContent).toContain('Fill in CST Details');
    expect(screen.getByTestId('maturity-modal-help').textContent).toContain('Assess Each Theme');
  });

  it('renders version history modal with release notes', () => {
    const props = buildProps();
    render(<MaturityModalManager {...props} modalType="versionHistory" />);

    expect(screen.getByTestId('maturity-modal-version-history')).toBeInTheDocument();
    expect(screen.getByTestId('maturity-version-history-heading')).toBeInTheDocument();
    expect(screen.getByTestId('maturity-modal-version-history').textContent).toContain(
      'Version 5.20'
    );
    expect(screen.getByTestId('maturity-modal-version-history').textContent?.toLowerCase()).toContain(
      'updated component matrix definitions'
    );
  });

  it('renders report modal, prints, and exports csv from report rows', () => {
    const props = buildProps();
    vi.useFakeTimers();
    const write = vi.fn();
    const print = vi.fn();
    const close = vi.fn();
    const focus = vi.fn();
    const openSpy = vi.spyOn(window, 'open').mockReturnValue({
      document: {
        write,
        close: vi.fn(),
      },
      print,
      close,
      focus,
    } as unknown as Window);

    render(<MaturityModalManager {...props} modalType="report" />);

    fireEvent.click(screen.getByTestId('maturity-report-print-button'));
    vi.runAllTimers();
    fireEvent.click(screen.getByTestId('maturity-report-export-csv-button'));

    expect(openSpy).toHaveBeenCalled();
    expect(print).toHaveBeenCalled();
    expect(write).toHaveBeenCalled();
    expect(props.onExportCsv).toHaveBeenCalledWith(props.reportData.rows);
    expect(screen.getByTestId('maturity-report-content').textContent).toContain('Mock Report');

    openSpy.mockRestore();
    vi.useRealTimers();
  });

  it('exports csv fallback rows when report rows are missing', () => {
    const props = buildProps();
    render(
      <MaturityModalManager
        {...props}
        modalType="report"
        reportData={{ ...props.reportData, rows: [] }}
      />
    );

    fireEvent.click(screen.getByTestId('maturity-report-export-csv-button'));
    expect(props.onExportCsv).toHaveBeenCalledWith([
      { id: 'Vision', label: 'Vision', value: 2 },
      { id: 'Benefits', label: 'Benefits', value: 0 },
    ]);
  });
});
