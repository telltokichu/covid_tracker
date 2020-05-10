import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './pages/home';
import { load } from 'react-cookies';
import Login from './pages/login';
import { makeStyles, fade } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AddRecipe from './pages/AddRecipe';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/header';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
	return {
		root: {
			backgroundColor: theme.palette.type == 'light' ? '#fff' : theme.palette.grey[900],
			color: theme.palette.type == 'light' ? theme.palette.grey[900] : '#fff'
		},
		container: {
			padding: theme.spacing(2)
		}
	};
});

const App = () => {
	const dispatch = useDispatch();
	const { themeReducer } = useSelector(({ themeReducer }) => {
		return {
			themeReducer
		};
	});
	const classes = useStyles();
	return (
		<BrowserRouter>
			{load('session') ? (
				<Grid container direction="column" className={classes.root}>
					<Grid item>
						<Header />
					</Grid>
					<Grid item container justify="center">
						<Grid item xs={false} sm={false} md={1} />
						<Grid item xs={11} sm={12} md={10}>
							<Switch>
								<Route exact path="/" exact component={Home} />
								<Route path="/home" exact component={Home} />
								<Route path="/addrecipe" exact component={AddRecipe} />
								<Redirect to="/home" />
							</Switch>
						</Grid>
						<Grid item xs={false} sm={false} md={1} />
					</Grid>
				</Grid>
			) : (
				<Switch>
					<Route path="/login" component={Login} />
					<Redirect to="/login" />
				</Switch>
			)}
		</BrowserRouter>
	);
};

export default App;
