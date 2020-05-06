import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './pages/home';
import CustomHeader from './components/header';
import { Layout, Menu, Breadcrumb } from 'antd';
import SideNav from '../src/components/sidebar';
import { load } from 'react-cookies';
import Login from './pages/login';

const { Header, Content, Footer } = Layout;
class App extends Component {
	render() {
		return (
			<BrowserRouter>
				{load('session') ? (
					<Layout style={{ minHeight: '100vh' }}>
						<SideNav
							style={{
								overflow: 'auto',
								height: '100vh',
								position: 'sticky',
								top: 0,
								left: 0
							}}
						/>
						<Layout>
							<CustomHeader />
							<Switch>
								<Route exact path="/" exact component={Home} />
								<Route path="/home" exact component={Home} />
								<Redirect to="/home" />
							</Switch>
						</Layout>
					</Layout>
				) : (
					<Layout>
						<Switch>
							<Route path="/login" component={Login} />
							<Redirect to="/login" />
						</Switch>
					</Layout>
				)}
			</BrowserRouter>
		);
	}
}

export default App;
