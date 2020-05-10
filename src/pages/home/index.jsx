import React, { Component } from 'react';
import { Button, Grid } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Add from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { useHistory, useRouteMatch } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
	palette: {
		type: 'dark'
	},
	dashboard: {
		// height: '100vh'
	},
	appbar: {
		padding: 0
	}
}));
const Home = () => {
	const classes = useStyles();
	const history = useHistory();
	return <Grid className={classes.dashboard} />;
};

export default Home;
