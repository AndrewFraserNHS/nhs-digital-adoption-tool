import { describe, expect, it } from 'vitest';

import { TOOLKIT_OPTIONS } from './toolkits';

describe('TOOLKIT_OPTIONS', () => {
  it('SHOULD resolve each toolkit PDF under the app base path', () => {
    expect(TOOLKIT_OPTIONS.map((toolkit) => toolkit.path)).toEqual([
      `${import.meta.env.BASE_URL}Change%20Management%20Toolkit%20v3.0%20September%202023.pdf`,
      `${import.meta.env.BASE_URL}AVT%20Digital%20Adoption%20Toolkit%20-%20V2.1%20July%202026.pdf`,
    ]);
  });
});