import React from 'react';
import { Select, Spin } from 'antd';
import { useGetModelsByMarkaQuery } from '../../redux/services/adsApi';

const { Option } = Select;

interface ModelSelectProps {
  selectedMarka: string | null;
}

const ModelSelect: React.FC<ModelSelectProps> = ({ selectedMarka }) => {
  const { data: models, isLoading: isModelsLoading } = useGetModelsByMarkaQuery(selectedMarka || '');

  return (
    <Select
      mode="multiple"
      placeholder="Model"
      style={{ width: '100%' }}
      disabled={!selectedMarka}
      loading={isModelsLoading}
    >
      {isModelsLoading ? (
        <Option disabled>
          <Spin size="small" />
        </Option>
      ) : (
        models?.map((model: any) => (
          <Option key={model.id} value={model.model}>
            {model.model}
          </Option>
        ))
      )}
    </Select>
  );
};

export default ModelSelect;
