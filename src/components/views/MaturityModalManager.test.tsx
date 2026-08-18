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
  it('SHOULD return null WHERE modalType is empty', () => {
    // arrange
    const props = buildProps();

    // act
    const { container } = render(<MaturityModalManager {...props} modalType="" />);

    // assert
    expect(container.firstChild).toBeNull();
  });

  it('SHOULD render matrix modal and handles score selection and close', () => {
    // arrange
    const props = buildProps();
    render(<MaturityModalManager {...props} modalType="matrix" />);

    // act 1
    fireEvent.click(screen.getByTestId('maturity-matrix-score-2'));

    // assert 1
    expect(props.onSetScore).toHaveBeenCalledWith('Vision', 2);

    // act 2
    fireEvent.click(screen.getByTestId('maturity-modal-close'));

    // assert 2
    expect(props.onClose).toHaveBeenCalled();
  });

  it('SHOULD render guidance modal and shows fallback WHERE missing guidance', () => {
    // arrange
    const props = buildProps();

    // act 1
    const { rerender } = render(<MaturityModalManager {...props} modalType="guidance" />);

    // assert 1
    expect(screen.getByTestId('maturity-modal-guidance')).toBeInTheDocument();
    expect(screen.getByTestId('maturity-guidance-body').textContent).toContain('Purpose');
    expect(screen.getByTestId('maturity-guidance-body').textContent).toContain(
      'Inputs, tools and templates'
    );

    // act 2
    rerender(
      <MaturityModalManager
        {...props}
        modalType="guidance"
        activeComponent="Benefits"
        guidanceData={{}}
      />
    );

    // assert 2
    expect(screen.getByTestId('maturity-guidance-body').textContent).toContain(
      'No guidance available.'
    );
  });

  it('SHOULD render help modal with usage guidance', () => {
    // arrange
    const props = buildProps();

    // act
    render(<MaturityModalManager {...props} modalType="help" />);

    // assert
    expect(screen.getByTestId('maturity-modal-help')).toBeInTheDocument();
    expect(screen.getByTestId('maturity-help-heading')).toBeInTheDocument();
    expect(screen.getByTestId('maturity-modal-help').textContent).toContain('Fill in CST Personalisation');
    expect(screen.getByTestId('maturity-modal-help').textContent).toContain('Assess Each Theme');
  });

  it('renders version history modal with release notes', () => {
    // arrange
    const props = buildProps();

    // act
    render(<MaturityModalManager {...props} modalType="versionHistory" />);


    // assert
    expect(screen.getByTestId('maturity-modal-version-history')).toBeInTheDocument();
    expect(screen.getByTestId('maturity-version-history-heading')).toBeInTheDocument();
    expect(screen.getByTestId('maturity-modal-version-history').textContent).toContain(
      'Version 5.20'
    );
    expect(screen.getByTestId('maturity-modal-version-history').textContent?.toLowerCase()).toContain(
      'updated component matrix definitions'
    );
  });

  it('SHOULD render report modal, prints, and exports csv from report rows', () => {
    // arrange
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

    // act
    render(<MaturityModalManager {...props} modalType="report" />);

    fireEvent.click(screen.getByTestId('maturity-report-print-button'));
    vi.runAllTimers();
    fireEvent.click(screen.getByTestId('maturity-report-export-csv-button'));

    // assert
    expect(openSpy).toHaveBeenCalled();
    expect(print).toHaveBeenCalled();
    expect(write).toHaveBeenCalled();
    expect(props.onExportCsv).toHaveBeenCalledWith(props.reportData.rows);
    expect(screen.getByTestId('maturity-report-content').textContent).toContain('Mock Report');

    // restore
    openSpy.mockRestore();
    vi.useRealTimers();
  });

  it('SHOULD export csv fallback rows WHERE report rows are missing', () => {
    // arrange
    const props = buildProps();
    render(
      <MaturityModalManager
        {...props}
        modalType="report"
        reportData={{ ...props.reportData, rows: [] }}
      />
    );

    // act
    fireEvent.click(screen.getByTestId('maturity-report-export-csv-button'));

    // assert
    expect(props.onExportCsv).toHaveBeenCalledWith([
      { id: 'Vision', label: 'Vision', value: 2 },
      { id: 'Benefits', label: 'Benefits', value: 0 },
    ]);
  });
});
