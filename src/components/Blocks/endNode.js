import React from 'react';

import { Handle } from 'react-flow-renderer';

const endNode = ({ data, isConnectable }) => {
  return (
    <>      
      <div style ={{ border: '3px solid Tomato', width: '200px', height:'50px', padding: 10, textAlign:'center' }}>
        End 
      </div>
      <Handle
        type="target"
        position="top"
        id="a"
        isConnectable={isConnectable}
      />
    </>
  );
};

export default endNode;