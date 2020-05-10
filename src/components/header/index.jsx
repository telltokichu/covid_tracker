import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { load, remove } from 'react-cookies';
import clsx from 'clsx';
import { makeStyles, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Brightness4 from '@material-ui/icons/Brightness4';
import Brightness7 from '@material-ui/icons/Brightness7';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import HomeRounded from '@material-ui/icons/HomeRounded';
import Add from '@material-ui/icons/Add';
import { Button, InputBase } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/images/logo.svg';
import { modeDark, modeLight } from '../../services/theme/actions';

const useStyles = makeStyles((theme) => {
	return {
		toolbar: {
			backgroundColor: theme.palette.type == 'light' ? '#fff' : theme.palette.grey[900],
			color: theme.palette.type == 'light' ? theme.palette.grey[900] : '#fff'
			// borderBottom: '1px solid #7575754f'
		},
		appBar: {
			zIndex: theme.zIndex.drawer + 1,
			backgroundColor: theme.palette.type == 'light' ? '#fff' : theme.palette.grey[900],
			boxShadow: 'none'
		},
		chip: {
			marginRight: 10,
			marginLeft: 10
		},
		search: {
			height: '45px',
			position: 'relative',
			borderRadius: 25,
			backgroundColor: '#c4c4c459',
			'&:hover': {
				backgroundColor: '#c4c4c494'
			},
			marginRight: theme.spacing(2),
			marginLeft: 0,
			width: '100%'
		},
		searchIcon: {
			height: '45px',
			padding: theme.spacing(0, 2),
			height: '100%',
			position: 'absolute',
			pointerEvents: 'none',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		},
		inputRoot: {
			color: 'inherit',
			width: '100%',
			height: '45px'
		},
		inputInput: {
			padding: theme.spacing(1, 1, 1, 0),
			paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
			transition: theme.transitions.create('width'),
			width: '100%'
		},
		navButton: {
			marginRight: 10,
			borderRadius: 20
			// backgroundColor: theme.palette.type == 'light' ? '#fff' : theme.palette.grey[400]
		},
		avatar: {
			margin: theme.spacing(1),
			width: '80px',
			height: '60px',
			filter: theme.palette.type == 'light' ? `grayscale(0)` : `grayscale(1)`
		},
		mobileView: {
			display: 'flex',
			flex: 1,
			[theme.breakpoints.down('sm')]: {
				display: 'none',
				flex: 1
			}
		},
		mobileViewAdapt: {
			display: 'contents',
			alignContent: 'center'
			// [theme.breakpoints.down('xs')]: {
			// 	display: 'none'
			// }
		}
	};
});

const Header = () => {
	const dispatch = useDispatch();
	const { themeReducer } = useSelector(({ themeReducer }) => {
		return {
			themeReducer
		};
	});
	const classes = useStyles();

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar className={classes.toolbar}>
				<Avatar className={classes.avatar} src={logo} />
				<div className={classes.mobileView}>
					<IconButton color="inherit" component={Link} to="/home">
						<HomeRounded />
					</IconButton>
					<IconButton color="inherit" component={Link} to="/addrecipe">
						<Add />
					</IconButton>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
					<IconButton color="inherit">
						<Badge badgeContent={4} color="secondary">
							<NotificationsIcon />
						</Badge>
					</IconButton>
				</div>
				<div className={classes.mobileViewAdapt}>
					<IconButton
						color="inherit"
						onClick={() => {
							if (themeReducer == 'light') {
								dispatch(modeDark());
							} else {
								dispatch(modeLight());
							}
						}}
					>
						{themeReducer != 'light' ? <Brightness7 /> : <Brightness4 />}
					</IconButton>
					<Chip
						className={classes.chip}
						label="Logout"
						onClick={() => {
							remove('session');
							window.location.reload();
						}}
						variant="outlined"
						clickable
					/>
					<Avatar src={load('session').userInfo.photoURL} style={{ height: '40px', width: '40px' }} />
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
