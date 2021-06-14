import { render } from '@testing-library/react';

import GiftsCostsContainer from './GiftsCostsContainer';

describe('GiftsCostsContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GiftsCostsContainer />);
    expect(baseElement).toBeTruthy();
  });
});
