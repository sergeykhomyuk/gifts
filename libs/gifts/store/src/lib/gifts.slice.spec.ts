import { giftsReducer, initialGiftsState } from './gifts.slice';

describe('gifts reducer', () => {
  it('should handle initial state', () => {
    expect(giftsReducer(undefined, { type: '' })).toEqual(initialGiftsState);
  });
});
