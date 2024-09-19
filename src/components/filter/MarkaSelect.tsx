import React from 'react';
import { Select } from 'antd';
import { useGetCarMarkaQuery } from '../../redux/services/adsApi';

const { Option } = Select;

interface MarkaSelectProps {
  onMarkaChange: (value: string) => void;
}

const MarkaSelect: React.FC<MarkaSelectProps> = ({ onMarkaChange }) => {
  const { data: marka, isLoading: isMarkaLoading } = useGetCarMarkaQuery('');

  return (
    <Select
      placeholder="Marka"
      onChange={onMarkaChange}
      loading={isMarkaLoading}
      style={{ width: '100%', height: "100%" }}
      showSearch
    >
      {marka?.marka.map((marka: string) => (
        <Option key={marka} value={marka}>
          {marka}
        </Option>
      ))}
    </Select>
  );
};

export default MarkaSelect;
