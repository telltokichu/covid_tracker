import React, { useEffect } from 'react';
import { Row, Col, Card, Layout, Button } from 'antd';
import { GoogleCircleFilled } from '@ant-design/icons';
import firebase from 'firebase/app';
import { save } from 'react-cookies';

import 'firebase/auth';

import './style.scss';
const { Header, Content, Footer } = Layout;

const Login = () => {
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
		<Content style={{ padding: '10px', height: '100vh' }} className="login">
			<Card title="Cooku" bordered={false} className="text-center">
				<Button
					type="primary"
					shape="round"
					icon={<GoogleCircleFilled />}
					size={'large'}
					onClick={() => {
						signinWithGoogle();
					}}
				>
					Sign in with Google
				</Button>
			</Card>
		</Content>
	);
};

export default Login;
