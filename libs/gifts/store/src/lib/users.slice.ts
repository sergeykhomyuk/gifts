import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { User } from '@and-open/gifts/core';
import { LoadingStatus } from '@and-open/core/api';
import * as usersApi from '@and-open/gifts/api';

export const USERS_FEATURE_KEY = 'users';

export interface UsersState extends EntityState<User> {
  loadingStatus: LoadingStatus;
  error: string | null;
}

export const usersAdapter = createEntityAdapter<User>({
  selectId: (user) => user.id,
});

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
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
 *   dispatch(fetchUsers())
 * }, [dispatch]);
 * ```
 */
export const fetchUsers = createAsyncThunk(
  'users/fetchStatus',
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getUserss()`;
     * Right now we just return an empty array.
     */
    return usersApi.getUsers();
  }
);

export const initialUsersState: UsersState = usersAdapter.getInitialState({
  loadingStatus: LoadingStatus.NotLoaded,
  error: null,
});

export const usersSlice = createSlice({
  name: USERS_FEATURE_KEY,
  initialState: initialUsersState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state: UsersState) => {
        state.loadingStatus = LoadingStatus.Loading;
      })
      .addCase(
        fetchUsers.fulfilled,
        (state: UsersState, action: PayloadAction<User[]>) => {
          usersAdapter.setAll(state, action.payload);
          state.loadingStatus = LoadingStatus.Loaded;
        }
      )
      .addCase(fetchUsers.rejected, (state: UsersState, action) => {
        state.loadingStatus = LoadingStatus.Error;
        state.error = action.error.message ?? null;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const usersReducer = usersSlice.reducer;

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
 *   dispatch(usersActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const usersActions = usersSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllUsers);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = usersAdapter.getSelectors();

export const getUsersState = (rootState: {
  [USERS_FEATURE_KEY]: UsersState;
}): UsersState => rootState[USERS_FEATURE_KEY];

export const selectAllUsers = createSelector(getUsersState, selectAll);

export const selectUsersEntities = createSelector(
  getUsersState,
  selectEntities
);

export const selectUsersLoadingStatus = createSelector(
  getUsersState,
  (state) => state.loadingStatus
);

export const selectUsersLoadingError = createSelector(
  getUsersState,
  (state) => state.error
);
