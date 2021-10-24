import React, { useRef, useState } from 'react'
import ReactFlow, { ReactFlowProvider, addEdge, removeElements, Controls } from 'react-flow-renderer';
import Blocks from '../Blocks/blocks'
import { Modal} from 'antd'
import 'antd/dist/antd.css';
import IfCondition from '../RulesConstructor/IfCondition';
import startNode from '../Blocks/startNode';
import ifNode from '../Blocks/ifNode';
import statementNode from '../Blocks/statementNode'
import endNode from '../Blocks/endNode'

let id = 0;
const getId = () => `dndnode_${id++}`;

function Playground() {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [elementType, setElementType] = useState(false);
  const [elementName, setElementName] = useState([]);
  const [elements, setElements] = useState([]);
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onLoad = (reactFlowInstance) =>
    setReactFlowInstance(reactFlowInstance);
  
  const onDragOver = (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
  };

  const nodeTypes = {
    startNode: startNode,
    ifNode: ifNode,
    statementNode: statementNode,
    endNode: endNode
  };
  
  const onDrop = (event) => {
      event.preventDefault();
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('nodeType');
      const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
      });
      console.log(type)
      const newNode = {
      id: getId(),
      type: type,
      position,
      data: { label: type },
      };
  
      setElements((es) => es.concat(newNode));
  };
  
  const onElementClick = (event, element) => {
      showModal(element)
      console.log(element, 'element')
  }
  
  const onPaneClick = (event) => console.log('onPaneClick', event);
  
  const showModal = (r) => {
      setIsModalVisible(true);
      setElementName(r);
      setElementType(r.type)
      console.log(r)
  };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    }; 
  

  return (
    <div className="dndflow">
      <ReactFlowProvider>

            <div className="reactflow-wrapper" ref={reactFlowWrapper} style={{ width: '100%', height: '97vh' }}>
            <ReactFlow 
                elements={elements}
                onElementClick={onElementClick}
                onConnect={onConnect}
                onElementsRemove={onElementsRemove}
                onLoad={onLoad}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onPaneClick={onPaneClick}
                nodeTypes={nodeTypes}
            >
                <Controls />
            </ReactFlow>
            </div>
            <Blocks/>
      </ReactFlowProvider>
      <Modal 
        title="Form" 
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
        width={850}
        destroyOnClose={true}
      >
          {elementType === 'ifNode' ? <IfCondition/> : <div>Statement Form</div>}
        </Modal>
    </div>
    
  );
}

export default Playground;

