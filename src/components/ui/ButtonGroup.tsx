import React, { useState } from 'react';
import { Radio } from 'antd';
import type { ConfigProviderProps } from 'antd';

type SizeType = ConfigProviderProps['componentSize'];

const ButtonGroup: React.FC = () => {
  const [size, setSize] = useState<SizeType>('large');
  return (
    <>
      <Radio.Group size='large' value={size} onChange={(e) => setSize(e.target.value)} className='flex h-full' >
        <Radio.Button className='w-full h-full flex items-center justify-center ' value="All">All</Radio.Button>
        <Radio.Button className='w-full h-full flex items-center justify-center ' value="New">New</Radio.Button>
        <Radio.Button className='w-full h-full flex items-center justify-center ' value="Old">Old</Radio.Button>
      </Radio.Group>


    </>
  );
};

export default ButtonGroup;