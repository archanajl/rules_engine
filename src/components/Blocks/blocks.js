import React, {  useState } from 'react'
import { Layout, Menu } from 'antd';
import Icon from '@ant-design/icons';
import {  ImDiamonds } from "react-icons/im";
import {FcStart} from 'react-icons/fc'
import { FaEquals } from 'react-icons/fa'
import { GoStop } from 'react-icons/go'
import {AiFillPlusCircle, AiOutlineApartment} from 'react-icons/ai'
 
import 'antd/dist/antd.css';

const {  Sider } = Layout;

const Blocks = () => {
const [collapsed, updatecollapsed] = useState(false);
const toggleCollapsed = () => {
        updatecollapsed(!collapsed)
    };

const onDragStart = (event, nodeType) => {
      event.dataTransfer.setData('nodeType', nodeType);
      event.dataTransfer.effectAllowed = 'move';
    };

let iconStyles = { color: "white", fontSize: "2em", width:"500px", height:"100px" };
    return(
    <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>            
          <Menu.Item key="11" style={iconStyles}>
             <div className="dndnode" onDragStart={(event) => onDragStart(event, 'startNode')} draggable><FcStart />Start</div>
           </Menu.Item>
           <Menu.Item key="12" style={iconStyles}>
              <div className="dndnode" onDragStart={(event) => onDragStart(event, 'statementNode')} draggable> <FaEquals />Statement </div>
           </Menu.Item>
           <Menu.Item key="13" style={iconStyles}>
              <div className="dndnode" onDragStart={(event) => onDragStart(event, 'ifNode')} draggable> <ImDiamonds />Condition</div>
           </Menu.Item>
           <Menu.Item key="14" style={iconStyles}>
              <div className="dndnode" onDragStart={(event) => onDragStart(event, 'endNode')} draggable> <GoStop /> End</div>
           </Menu.Item>
           <Menu.Item key="15" style={iconStyles}>
              <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable> <AiFillPlusCircle /> Custom1</div>
           </Menu.Item>
           <Menu.Item key="16" style={iconStyles}>
              <div className="dndnode" onDragStart={(event) => onDragStart(event, 'input')} draggable> <AiOutlineApartment /> Custom2</div>
           </Menu.Item>
         </Menu>
        </Sider>
      </Layout>
      
    )
    
}

export default Blocks