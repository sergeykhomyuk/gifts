import { Row, Col, Slider, Select, Radio, RadioChangeEvent } from 'antd';
import { genders, GiftsFilter, Region, regions } from '@and-open/gifts/core';
import { debounce, formatPrice } from '@and-open/core/utils';
import { GiftsCostsFilterItem } from '../gifts-costs-filter-item/GiftsCostsFilterItem';
import './GiftsCostsFilter.module.scss';

export interface GiftsCostsFilterProps {
  filter: GiftsFilter;
  maxMinimalSpend: number;
  onFilterChange: (value: GiftsFilter) => void;
}

export function GiftsCostsFilter({
  filter,
  maxMinimalSpend,
  onFilterChange,
}: GiftsCostsFilterProps) {
  const handleMinimalSpendChange = debounce(
    (value: number) => onFilterChange({ ...filter, minimalSpend: value }),
    300
  );

  const handleRegionChange = (value: Region | '') =>
    onFilterChange({ ...filter, region: value || undefined });

  const handleGenderChange = (event: RadioChangeEvent) =>
    onFilterChange({ ...filter, gender: event.target.value || undefined });

  const priceMarks = {
    0: formatPrice(0),
    [maxMinimalSpend]: formatPrice(maxMinimalSpend),
  };

  return (
    <Row gutter={[32, 16]}>
      <Col span={8}>
        <GiftsCostsFilterItem title="Minimal spend">
          <Slider
            tooltipPlacement="bottom"
            min={0}
            max={maxMinimalSpend}
            marks={priceMarks}
            onChange={handleMinimalSpendChange}
            defaultValue={filter.minimalSpend ?? 0}
          />
        </GiftsCostsFilterItem>
      </Col>
      <Col span={8}>
        <GiftsCostsFilterItem title="Region">
          <Select
            defaultValue={filter.region ?? ''}
            onChange={handleRegionChange}
            style={{ width: 150 }}
          >
            <Select.Option key="" value="">
              All
            </Select.Option>
            {regions.map((region) => (
              <Select.Option key={region} value={region}>
                {region}
              </Select.Option>
            ))}
          </Select>
        </GiftsCostsFilterItem>
      </Col>
      <Col span={8}>
        <GiftsCostsFilterItem title="Gender">
          <Radio.Group
            defaultValue={filter.gender ?? ''}
            onChange={handleGenderChange}
            buttonStyle="solid"
          >
            <Radio.Button key="" value="">
              All
            </Radio.Button>
            {genders.map((gender) => (
              <Radio.Button key={gender} value={gender}>
                {gender}
              </Radio.Button>
            ))}
          </Radio.Group>
        </GiftsCostsFilterItem>
      </Col>
    </Row>
  );
}

export default GiftsCostsFilter;
