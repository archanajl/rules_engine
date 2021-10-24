import React from 'react';

import { Handle } from 'react-flow-renderer';

const statementNode = ({ data, isConnectable }) => {
  return (
    <>      
      <div style ={{ border: '3px solid DodgerBlue', width: '200px', height:'50px', padding: 10, textAlign:'center' }}>
        Statement 
      </div>
      <Handle
        type="target"
        position="top"
        id="a"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position="bottom"
        id="b"
        isConnectable={isConnectable}
      />
    </>
  );
};

export default statementNode;