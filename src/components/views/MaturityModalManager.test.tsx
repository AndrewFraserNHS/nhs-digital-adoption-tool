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

    fireEvent.click(screen.getByRole('button', { name: /2\s+-\s+Developing\s+Two/i }));
    expect(props.onSetScore).toHaveBeenCalledWith('Vision', 2);

    fireEvent.click(screen.getAllByRole('button', { name: '×' })[0]);
    expect(props.onClose).toHaveBeenCalled();
  });

  it('renders guidance modal and shows fallback when missing guidance', () => {
    const props = buildProps();
    const { rerender } = render(<MaturityModalManager {...props} modalType="guidance" />);

    expect(screen.getAllByText('Purpose').length).toBeGreaterThan(0);
    expect(screen.getByText('Inputs, tools and templates')).toBeInTheDocument();

    rerender(
      <MaturityModalManager
        {...props}
        modalType="guidance"
        activeComponent="Benefits"
        guidanceData={{}}
      />
    );
    expect(screen.getByText('No guidance available.')).toBeInTheDocument();
  });

  it('renders help modal with usage guidance', () => {
    const props = buildProps();
    render(<MaturityModalManager {...props} modalType="help" />);

    expect(screen.getByRole('heading', { name: /how to use this tool/i })).toBeInTheDocument();
    expect(screen.getByText(/fill in CST details/i)).toBeInTheDocument();
    expect(screen.getByText(/assess each theme/i)).toBeInTheDocument();
  });

  it('renders version history modal with release notes', () => {
    const props = buildProps();
    render(<MaturityModalManager {...props} modalType="versionHistory" />);

    expect(screen.getByRole('heading', { name: /version history/i })).toBeInTheDocument();
    expect(screen.getByText(/version 5\.20/i)).toBeInTheDocument();
    expect(screen.getAllByText(/updated component matrix definitions/i).length).toBeGreaterThan(0);
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

    fireEvent.click(screen.getByRole('button', { name: 'Print / Save PDF' }));
    vi.runAllTimers();
    fireEvent.click(screen.getByRole('button', { name: 'Export CSV' }));

    expect(openSpy).toHaveBeenCalled();
    expect(print).toHaveBeenCalled();
    expect(write).toHaveBeenCalled();
    expect(props.onExportCsv).toHaveBeenCalledWith(props.reportData.rows);
    expect(screen.getByText('Mock Report')).toBeInTheDocument();

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

    fireEvent.click(screen.getByRole('button', { name: 'Export CSV' }));
    expect(props.onExportCsv).toHaveBeenCalledWith([
      { id: 'Vision', label: 'Vision', value: 2 },
      { id: 'Benefits', label: 'Benefits', value: 0 },
    ]);
  });
});
