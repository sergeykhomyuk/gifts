import { Space, Spin } from 'antd';
import { GiftsFilter, User } from '@and-open/gifts/core';
import { LoadingStatus } from '@and-open/core/api';
import GiftsCostsChart from '../gifts-costs-chart/GiftsCostsChart';
import GiftsCostsFilter from '../gifts-costs-filter/GiftsCostsFilter';
import UsersTable from '../users-table/UsersTable';
import styles from './GiftsCosts.module.scss';

/* eslint-disable-next-line */
export interface GiftsCostsProps {
  filter: GiftsFilter;
  maxMinimalSpend: number;
  giftsCostsByMonth: number[];
  cumulativeGiftsCostsByMonth: number[];
  users: User[];
  loadingStatus: LoadingStatus;
  onFilterChange: (value: GiftsFilter) => void;
}

export function GiftsCosts({
  filter,
  maxMinimalSpend,
  giftsCostsByMonth,
  cumulativeGiftsCostsByMonth,
  users,
  loadingStatus,
  onFilterChange,
}: GiftsCostsProps) {
  return (
    <Spin spinning={loadingStatus === LoadingStatus.Loading}>
      <Space
        direction="vertical"
        size="middle"
        className={styles.giftsCostsDivider}
      >
        <GiftsCostsFilter
          filter={filter}
          maxMinimalSpend={maxMinimalSpend}
          onFilterChange={onFilterChange}
        />

        <GiftsCostsChart
          giftsCostsByMonth={giftsCostsByMonth}
          cumulativeGiftsCostsByMonth={cumulativeGiftsCostsByMonth}
        />

        <UsersTable users={users} />
      </Space>
    </Spin>
  );
}

export default GiftsCosts;
