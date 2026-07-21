import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(viteConfig, defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      reportsDirectory: './coverage',
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 45
      },
      include: [
        'src/components/views/**/*.{ts,tsx}',
        'src/lib/**/*.{ts,tsx}'
      ],
      exclude: [
        'src/**/*.test.{ts,tsx}',
        'src/test/**',
        'src/components/views/ActionPlanTracker.tsx',
        'src/components/views/AdoptionDashboard.tsx',
        'src/lib/charts.ts',
        'src/lib/legacyData.ts',
        'src/lib/maturityState.ts',
        'src/lib/reporting.ts',
        'src/lib/state.ts',
        'src/pages/legacy-v5.ts',
        'src/pages/legacy-v6.ts'
      ]
    }
  }
}));