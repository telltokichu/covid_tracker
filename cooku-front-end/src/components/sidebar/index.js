import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    BrowserRouter,
    withRouter,
    NavLink,
    hashHistory
} from 'react-router-dom';
// import { Router, hashHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faAngleDoubleLeft, faHome } from '@fortawesome/free-solid-svg-icons';
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Icon, Button } from 'antd';
import './style.scss';
const { SubMenu } = Menu;


class SideNav extends Component {
    state = {
        collapsed: true,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        const { Sider, Link } = Layout;
        const { location } = this.props;

        return (
            <Sider
                // trigger={null}
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                className="sideBar"
            >
                {/* <Button onClick={this.toggle} block type="link">
                    <FontAwesomeIcon
                        className="sidebarToggleIcon"
                        icon={this.state.collapsed ? faAngleDoubleRight : faAngleDoubleLeft}
                    />
                </Button> */}
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['home']}
                    selectedKeys={[location.pathname]}
                >
                    <Menu.Item key="/home">
                        <NavLink to="/home">
                            <SettingFilled />
                            <span>Config</span>
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default withRouter(SideNav);