import { render } from '@testing-library/react';

import GiftsCostsFilter from './GiftsCostsFilter';

describe('GiftsCostsFilter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <GiftsCostsFilter
        filter={{}}
        maxMinimalSpend={0}
        onFilterChange={() => null}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
