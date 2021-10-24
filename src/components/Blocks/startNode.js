import React from 'react';

import { Handle } from 'react-flow-renderer';

const startNode = ({ data, isConnectable }) => {
  return (
    <>      
      <div style ={{ border: '3px solid #73AD21', width: '200px', height:'50px', padding: 10, textAlign:'center' }}>
        Start 
      </div>
      <Handle
        type="source"
        position="bottom"
        id="a"
        isConnectable={isConnectable}
      />
    </>
  );
};

export default startNode;