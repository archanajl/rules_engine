import React from 'react';

import { Handle } from 'react-flow-renderer';
import './blocks.css'

const ifNode = ({ data, isConnectable }) => {
  return (
    < >
      <Handle
        type="target"
        position="top"
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <div className='diamond'>
        Condition
      </div>
      <Handle
        type="source"
        position="left"
        id="a"
        style={{background: '#555' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position="right"
        id="b"
        style={{background: '#555' }}
        isConnectable={isConnectable}
      />
    </>
  );
};

export default ifNode;