/*
 * @Author: Zting 
 * @Date: 2017-10-12 13:49:12 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-10-13 11:39:04
 */
import React, { Component } from 'react';
import './App.less';
import '../../fonts/less/font-awesome.less';  //font-awesome字体图标库
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

class App extends React.Component {
 state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  // constructor() {
  //   super();
  //   this.state = { collapsed: false };

  //   this.toggle = () => {
  //     this.setState({
  //       collapsed: !this.state.collapsed
  //     });
  //   };
  // }


  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }

}
export default App;


//  <Sider width={200} style={{ background: '#fff' }}>
//         <Menu
//           mode="inline"
//           defaultSelectedKeys={['1']}
//           defaultOpenKeys={['sub1']}
//           style={{ height: '100%', borderRight: 0 }}
//         >
//           <SubMenu key="sub1" title={<span><i className="fa fa-home fa-lg"></i> 首页</span>}>
//             <Menu.Item key="1"><i className="fa fa-camera-retro"></i> 财务报表</Menu.Item>
//             <Menu.Item key="2"><i className="fa fa-cog"></i> 审计流程</Menu.Item>
//             <Menu.Item key="3"><i className="fa fa-check-square"></i> 历史纪录</Menu.Item>
//             <Menu.Item key="4"><i className="fa fa-plus-square-o"></i> 加入我们</Menu.Item>
//           </SubMenu>
//           <SubMenu key="sub2" title={<span><Icon type="icon-candy" />会员服务</span>}>
//             <Menu.Item key="5"><Icon type="icon-jibao" />财务报表</Menu.Item>
//             <Menu.Item key="6"><Icon type="icon-zijinzouxiang" />历史纪录</Menu.Item>
//             <Menu.Item key="7"><Icon type="icon-longhubang" />加入我们</Menu.Item>
//             <Menu.Item key="8"><Icon type="bullbasaur" />财务报表</Menu.Item>
//           </SubMenu>
//           <SubMenu key="sub3" title={<span><Icon type="icon-zixuanzuhe" />合作平台</span>}>
//             <Menu.Item key="9">option9</Menu.Item>
//             <Menu.Item key="10">option10</Menu.Item>
//             <Menu.Item key="11">option11</Menu.Item>
//             <Menu.Item key="12">option12</Menu.Item>
//           </SubMenu>
//         </Menu>
//       </Sider>