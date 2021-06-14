import { LoadingStatus } from '@and-open/core/api';
import { render } from '@testing-library/react';

import GiftsCosts from './GiftsCosts';

describe('GiftsCosts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <GiftsCosts
        filter={{}}
        cumulativeGiftsCostsByMonth={[]}
        giftsCostsByMonth={[]}
        maxMinimalSpend={0}
        onFilterChange={() => null}
        users={[]}
        loadingStatus={LoadingStatus.Loaded}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
