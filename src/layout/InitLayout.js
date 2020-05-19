import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from '../views/Index';
import GlobalStyles from '../globalStyle';
import { ThemeProvider, ColorModeProvider } from '@xstyled/styled-components';
import theme from '../theme';

// display error or the details
const InitLayout = () => (
	<ThemeProvider theme={theme}>
		<ColorModeProvider>
			<GlobalStyles />
			<Router>
				<Switch>
					<Route path='/' component={Index} />
				</Switch>
			</Router>
		</ColorModeProvider>
	</ThemeProvider>
);

export default InitLayout;
