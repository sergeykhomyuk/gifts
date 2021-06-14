import { LoadingStatus } from '@and-open/core/api';
import { usersAdapter, usersReducer } from './users.slice';

describe('users reducer', () => {
  it('should handle initial state', () => {
    const expected = usersAdapter.getInitialState({
      loadingStatus: LoadingStatus.NotLoaded,
      error: null,
    });

    expect(usersReducer(undefined, { type: '' })).toEqual(expected);
  });
});
