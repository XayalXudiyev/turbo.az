import React from 'react';
import {  Input,  Space } from 'antd';


const InputRange: React.FC = () => (
  <Space direction="vertical">
    <Space.Compact>
      <Input style={{ width: '50%' }}  placeholder='Price, min.'  size={'large'} />
      <Input style={{ width: '50%' }}  placeholder='maks.' size={'large'}/>
    </Space.Compact>
  </Space>
);

export default InputRange;