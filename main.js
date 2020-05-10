import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import App from './src/App';
import AppProvider from './provider';

import './src/assets/common_styles/style.scss';

ReactDOM.render(
	<Provider store={store}>
		<AppProvider />
	</Provider>,
	document.getElementById('app')
);
