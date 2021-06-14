import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  filterUsers,
  getCumulativeGiftsCostsByMonth,
  getGiftsCostsByMonth,
  GiftsFilter,
  User,
} from '@and-open/gifts/core';
import { fetchUsers, getUsersState } from './users.slice';

export const GIFTS_FEATURE_KEY = 'gifts';

export interface GiftsState {
  filter: GiftsFilter;
  costsByMonth: number[];
  cumulativeCostsByMonth: number[];
  filteredUsersIds: string[];
}

export const initialGiftsState: GiftsState = {
  filter: {},
  costsByMonth: [],
  cumulativeCostsByMonth: [],
  filteredUsersIds: [],
};

export const giftsSlice = createSlice({
  name: GIFTS_FEATURE_KEY,
  initialState: initialGiftsState,
  reducers: {
    update: (
      state: GiftsState,
      action: PayloadAction<{ users: User[]; filter: GiftsFilter }>
    ) => {
      const giftedUsers = filterUsers(
        action.payload.users,
        action.payload.filter
      );
      const costsByMonth = getGiftsCostsByMonth(giftedUsers);
      const cumulativeCostsByMonth = getCumulativeGiftsCostsByMonth(
        costsByMonth
      );

      state.filter = action.payload.filter;
      state.costsByMonth = costsByMonth;
      state.cumulativeCostsByMonth = cumulativeCostsByMonth;
      state.filteredUsersIds = giftedUsers.map((user) => user.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchUsers.fulfilled,
      (state: GiftsState, action: PayloadAction<User[]>) => {
        giftsSlice.caseReducers.update(
          state,
          giftsSlice.actions.update({
            users: action.payload,
            filter: state.filter,
          })
        );
      }
    );
  },
});

/*
 * Export reducer for store configuration.
 */
export const giftsReducer = giftsSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(giftsActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const giftsActions = giftsSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllGifts);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
// const { selectAll, selectEntities } = giftsAdapter.getSelectors();

export const getGiftsState = (rootState: {
  [GIFTS_FEATURE_KEY]: GiftsState;
}): GiftsState => rootState[GIFTS_FEATURE_KEY];

export const selectCostsByMonth = createSelector(
  getGiftsState,
  (state) => state.costsByMonth
);

export const selectCumulativeCostsByMonth = createSelector(
  getGiftsState,
  (state) => state.cumulativeCostsByMonth
);

export const selectFilter = createSelector(
  getGiftsState,
  (state) => state.filter
);

export const selectFilteredUsers = createSelector(
  getGiftsState,
  getUsersState,
  (giftsState, usersState) =>
    giftsState.filteredUsersIds.map((id) => usersState.entities[id] as User)
);
