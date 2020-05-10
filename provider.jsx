import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import App from './src/App';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export default function AppProvider() {
	const { themeReducer } = useSelector(({ themeReducer }) => {
		return {
			themeReducer
		};
	});

	const theme = React.useMemo(
		() =>
			createMuiTheme({
				palette: {
					type: themeReducer
				}
			}),
		[ themeReducer ]
	);

	return (
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	);
}
