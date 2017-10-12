import React, { Component } from 'react';
import './App.less';
import './fonts/less/font-awesome.less';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
  render() {
    return (
         <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" title={<span><i className="fa fa-home fa-lg"></i> 首页</span>}>
            <Menu.Item key="1"><i className="fa fa-camera-retro"></i> 财务报表</Menu.Item>
            <Menu.Item key="2"><i className="fa fa-cog"></i> 审计流程</Menu.Item>
            <Menu.Item key="3"><i className="fa fa-check-square"></i> 历史纪录</Menu.Item>
            <Menu.Item key="4"><i className="fa fa-plus-square-o"></i> 加入我们</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="icon-candy" />会员服务</span>}>
            <Menu.Item key="5"><Icon type="icon-jibao" />财务报表</Menu.Item>
            <Menu.Item key="6"><Icon type="icon-zijinzouxiang" />历史纪录</Menu.Item>
            <Menu.Item key="7"><Icon type="icon-longhubang" />加入我们</Menu.Item>
            <Menu.Item key="8"><Icon type="bullbasaur" />财务报表</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="icon-zixuanzuhe" />合作平台</span>}>
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '12px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          <a href="http://www.baidu.com">123</a>
        </Content>
      </Layout>
    </Layout>
  </Layout>
    );
  }
}

export default App;
