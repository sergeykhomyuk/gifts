import { Typography } from 'antd';
import { ReactElement } from 'react';
import './GiftsCostsFilterItem.module.scss';

/* eslint-disable-next-line */
export interface GiftsCostsFilterItemProps {
  title: string;
  children: ReactElement | string;
}

export function GiftsCostsFilterItem({
  title,
  children,
}: GiftsCostsFilterItemProps) {
  return (
    <>
      <div>
        <Typography.Text type="secondary" strong={true}>
          {title}
        </Typography.Text>
      </div>
      {children}
    </>
  );
}

export default GiftsCostsFilterItem;
