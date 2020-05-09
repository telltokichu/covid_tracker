import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './pages/home';
import { load, remove } from 'react-cookies';
import Login from './pages/login';
import clsx from 'clsx';
import { makeStyles, fade } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MainListItems from './navs';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import AddRecipe from './pages/AddRecipe';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from './assets/images/logo.png';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		backgroundColor: '#fff'
	},
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
		backgroundColor: '#fff',
		color: '#000',
		borderBottom: '1px solid #7575754f'
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		boxShadow: 'none',
		transition: theme.transitions.create([ 'width', 'margin' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create([ 'width', 'margin' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: 36
	},
	menuButtonHidden: {
		display: 'none'
	},
	title: {
		flexGrow: 1
	},
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(7)
		}
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto'
	},
	container: {
		padding: theme.spacing(0)
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column'
	},
	fixedHeight: {
		height: 240
	},
	chip: {
		backgroundColor: '#fff',
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
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%'
		// [theme.breakpoints.up('md')]: {
		// 	width: '100%'
		// }
	},
	navButton: {
		marginRight: 10,
		borderRadius: 20
	},
	avatar: {
		margin: theme.spacing(1),
		width: '80px',
		height: '60px'
	}
}));

const App = () => {
	const classes = useStyles();
	const { pathname } = window.location;
	console.log('pathname: ', pathname);
	const [ open, setOpen ] = React.useState(false);
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
	return (
		<BrowserRouter>
			{load('session') ? (
				<div className={classes.root}>
					<CssBaseline />
					<AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
						<Toolbar className={classes.toolbar}>
							{/* <IconButton
								edge="start"
								color="inherit"
								aria-label="open drawer"
								onClick={handleDrawerOpen}
								className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
							>
								<MenuIcon />
							</IconButton> */}
							<Avatar className={classes.avatar} src={logo} />
							<Button
								component={Link}
								variant="outlined"
								color="primary"
								to="/home"
								className={classes.navButton}
							>
								Home
							</Button>
							<Button
								component={Link}
								variant="outlined"
								color="primary"
								to="/addrecipe"
								className={classes.navButton}
							>
								Add
							</Button>
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
							<Chip
								className={classes.chip}
								// label={load('session').userInfo.displayName}
								avatar={
									<Avatar
										src={load('session').userInfo.photoURL}
										style={{ height: '40px', width: '40px' }}
									/>
								}
							/>
						</Toolbar>
					</AppBar>
					{/* <Drawer
						variant="permanent"
						classes={{
							paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
						}}
						open={open}
					>
						<div className={classes.toolbarIcon}>
							<IconButton onClick={handleDrawerClose}>
								<ChevronLeftIcon />
							</IconButton>
						</div>
						<Divider />
						<List>
							<MainListItems />
						</List>
					</Drawer> */}
					<main className={classes.content}>
						<div className={classes.appBarSpacer} />
						<Container maxWidth={false} className={classes.container}>
							{/* <Grid container spacing={3}>
							<Grid item xs={12} md={8} lg={9}>
								<Paper className={fixedHeightPaper}></Paper>
							</Grid>
							<Grid item xs={12} md={4} lg={3}>
								<Paper className={fixedHeightPaper}></Paper>
							</Grid>
							<Grid item xs={12}>
								<Paper className={classes.paper}>}</Paper>
							</Grid>
						</Grid>
						<Box pt={4}>
							<Copyright />
						</Box> */}
							<Switch>
								<Route exact path="/" exact component={Home} />
								<Route path="/home" exact component={Home} />
								<Route path="/addrecipe" exact component={AddRecipe} />
								<Redirect to="/home" />
							</Switch>
						</Container>
					</main>
				</div>
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
