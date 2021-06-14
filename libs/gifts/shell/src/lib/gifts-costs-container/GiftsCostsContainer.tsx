import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUsers,
  giftsActions,
  selectAllUsers,
  selectCostsByMonth,
  selectCumulativeCostsByMonth,
  selectFilter,
  selectFilteredUsers,
  selectUsersLoadingError,
  selectUsersLoadingStatus,
} from '@and-open/gifts/store';
import { GiftsCosts } from '@and-open/gifts/ui';
import { GiftsFilter, maxSpendAmount } from '@and-open/gifts/core';
import './GiftsCostsContainer.module.scss';

/* eslint-disable-next-line */
export interface GiftsCostsContainerProps {}

export function GiftsCostsContainer(props: GiftsCostsContainerProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const users = useSelector(selectAllUsers);
  const loadingStatus = useSelector(selectUsersLoadingStatus);
  const loadingError = useSelector(selectUsersLoadingError);

  const giftsCostsByMonth = useSelector(selectCostsByMonth);
  const cumulativeGiftsCostsByMonth = useSelector(selectCumulativeCostsByMonth);
  const filteredUsers = useSelector(selectFilteredUsers);

  const filter = useSelector(selectFilter);

  const handleFilterChange = (updatedFilter: Partial<GiftsFilter>) =>
    dispatch(giftsActions.update({ users, filter: updatedFilter }));

  return (
    <GiftsCosts
      filter={filter}
      maxMinimalSpend={maxSpendAmount}
      giftsCostsByMonth={giftsCostsByMonth}
      cumulativeGiftsCostsByMonth={cumulativeGiftsCostsByMonth}
      users={filteredUsers}
      loadingStatus={loadingStatus}
      loadingError={loadingError}
      onFilterChange={handleFilterChange}
    />
  );
}

export default GiftsCostsContainer;
