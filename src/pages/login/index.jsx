import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../../components/copyright';
import logo from '../../assets/images/logo.png';
import { Chip } from '@material-ui/core';
import firebase from 'firebase/app';
import { save } from 'react-cookies';

import 'firebase/auth';
const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh'
	},
	image: {
		backgroundImage: 'url(https://image.freepik.com/free-vector/chef-concept-illustration_114360-1219.jpg)',
		backgroundRepeat: 'no-repeat',
		backgroundColor: theme.palette.type === 'light' ? '#fff' : theme.palette.grey[900],
		backgroundSize: 'inherit',
		backgroundPosition: 'center'
	},
	paper: {
		margin: theme.spacing(16, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		width: '200px',
		height: '200px'
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	},
	chip: {
		backgroundColor: theme.palette.type === 'light' ? '#fff' : theme.palette.grey[900]
	}
}));

const Login = () => {
	const classes = useStyles();
	const signinWithGoogle = () => {
		var firebaseConfig = {
			apiKey: 'AIzaSyDshNp7DlUXt2YD1fv6tHPma0VX117r9M8',
			authDomain: 'cooku-74862.firebaseapp.com',
			databaseURL: 'https://cooku-74862.firebaseio.com',
			projectId: 'cooku-74862',
			storageBucket: 'cooku-74862.appspot.com',
			messagingSenderId: '141889153242',
			appId: '1:141889153242:web:e1e86dc72726ff2af35de3'
		};
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function(result) {
				console.log('result: ', result.credential.accessToken);
				const { user: { displayName, email, photoURL } } = result;
				let session = {
					token: result.credential.accessToken,
					userInfo: {
						displayName,
						email,
						photoURL
					}
				};
				save('session', session);
				window.location.reload();
			})
			.catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				console.log('errorCode: ', errorCode);
				var errorMessage = error.message;
				console.log('errorMessage: ', errorMessage);
				// The email of the user's account used.
				var email = error.email;
				console.log('email: ', email);
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				console.log('credential: ', credential);
				// ...
			});
	};
	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={3} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar} src={logo} />
					<Chip
						className={classes.chip}
						label="Sign in with Google"
						variant="outlined"
						avatar={<Avatar src="https://pluspng.com/img-png/google-logo-png-open-2000.png" />}
						onClick={() => {
							signinWithGoogle();
						}}
						clickable
					/>
					<Box mt={5}>
						<Copyright />
					</Box>
				</div>
			</Grid>
		</Grid>
	);
};

export default Login;
