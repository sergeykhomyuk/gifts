import { Table } from 'antd';
import { User } from '@and-open/gifts/core';
import {
  formatMonth,
  formatPrice,
  numericSorter,
  stringSorter,
} from '@and-open/core/utils';
import './UsersTable.module.scss';

export interface UsersTableProps {
  users: User[];
}

export function UsersTable({ users }: UsersTableProps) {
  return (
    <Table dataSource={users} rowKey="id">
      <Table.Column
        title="Region"
        dataIndex="region"
        key="region"
        sorter={stringSorter((user: User) => user.region)}
      ></Table.Column>
      <Table.Column
        title="Gender"
        dataIndex="gender"
        key="gender"
        sorter={stringSorter((user: User) => user.gender)}
      ></Table.Column>
      <Table.Column
        title="Spend"
        dataIndex="spend"
        key="spend"
        render={(price) => formatPrice(price)}
        sorter={numericSorter((user: User) => user.spend)}
      ></Table.Column>
      <Table.Column
        title="Birthday month"
        dataIndex="birthday"
        key="birthday"
        render={(month) => formatMonth(month)}
        sorter={numericSorter((user: User) => user.birthday)}
      ></Table.Column>
    </Table>
  );
}

export default UsersTable;
