import { render } from '@testing-library/react';

import GiftsCostsChart from './GiftsCostsChart';

describe('GiftsCostsChart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GiftsCostsChart cumulativeGiftsCostsByMonth={[]} giftsCostsByMonth={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
