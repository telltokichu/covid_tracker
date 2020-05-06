import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'store';
import App from './src/App';

import 'antd/dist/antd.css';
import './src/assets/common_styles/neumorphism.scss';
import './src/assets/common_styles/style.scss';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
