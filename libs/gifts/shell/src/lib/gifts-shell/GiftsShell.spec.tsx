import { render } from '@testing-library/react';

import GiftsShell from './GiftsShell';

describe('GiftsShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GiftsShell />);
    expect(baseElement).toBeTruthy();
  });
});
