import { render } from '@testing-library/react';

import GiftsCostsFilterItem from './GiftsCostsFilterItem';

describe('GiftsCostsFilterItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <GiftsCostsFilterItem title="">hello</GiftsCostsFilterItem>
    );
    expect(baseElement).toBeTruthy();
  });
});
