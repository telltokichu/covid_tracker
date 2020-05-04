import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './pages/home';
import CustomHeader from './components/header'
import { Layout, Menu, Breadcrumb } from 'antd';
import SideNav from '../src/components/sidebar';
const { Header, Content, Footer } = Layout;
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout style={{ minHeight: '100vh' }}>
                    <CustomHeader />
                    <SideNav
                        style={{
                            overflow: "auto",
                            height: "100vh",
                            position: "sticky",
                            top: 0,
                            left: 0
                        }} />
                    <Layout>
                        <Route exact path="/" exact component={Home} />
                        <Route path="/home" exact component={Home} />
                    </Layout>

                </Layout>
            </BrowserRouter>

        );
    }
}

export default App;